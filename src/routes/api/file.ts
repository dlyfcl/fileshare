import * as crypto from 'crypto';
import * as Express from 'express';
import * as fs from 'fs';
import * as multer from 'multer';
import * as path from 'path';
import cb from '../../cb/cb';
import queryFile from '../../db/queryFile';
import { Admin } from '../../operations/admin';
import { File } from '../../operations/file';
const router = Express.Router();
// 文件操作
router.post('/', (req: any, res: any) => {
  File.setDir(process.env.UPLOAD_DIR);
  const upload = multer({ dest: File.dir });
  upload(req, res, async () => {
    switch (req.body.action) {
      case 'upload':
        const files = req.files._upload;
        const oldpath = path.resolve(process.env.UPLOAD_DIR, files.name);

        fs.readFile(
          oldpath,
          cb((data: any) => {
            const hash = crypto.createHash('sha256');
            hash.update(data);
            const hashed = hash.digest('hex');
            const newpath = path.resolve(
              process.env.UPLOAD_DIR,
              hashed + '.' + files.extension,
            );
            fs.renameSync(oldpath, newpath);
            const file = new File(files.originalname, hashed);
            file.upload(req.files._upload, req, res);
          }),
        );
        break;
      case 'delete':
        const fileId = req.body.id;
        const deletefile = new File('', '');
        deletefile.delete(fileId, req, res);
        break;
      case 'permit':
        const permitResult = await Admin.permitFile(req.body.id);
        if (permitResult) {
          res.json('审核通过');
        } else {
          res.status(500).json({ error: '操作失败' });
        }

        break;
      case 'reject':
        const rejectResult = await Admin.rejectFile(req.body.id);
        if (rejectResult) {
          res.json('审核未通过');
        } else {
          res.status(500).json({ error: '操作失败' });
        }
        break;
    }
  });
});

router.get('/', async (req: any, res: any, next: any) => {
  if (req.query.filter === 'pending') {
    const reulst = await Admin.getPendingFiles();
    res.json(reulst);
  } else {
    next();
  }
});

router.get('/', async (req: any, res: any) => {
  const file = new File('', '');
  let sql = null;
  if (req.query.type === 'all') {
    sql = 'select * from file';
  } else {
    sql = 'select * from file where type = \'' + req.query.type + '\';';
  }
  await file.getFiles(req, res, sql);
});

router.get('/hots', async (req: any, res: any) => {
  switch (req.query.type) {
    case 'video':
    case 'zip':
    case 'image':
    case 'doc':
      const hot1 = new File(req, res);
      hot1.getType(req, res, req.query.type);
      break;
  }
});

router.post('/:id', (req: any, res: any) => {
  const filedetail = new File(req, res);
  filedetail.getFiledetails(req, res);
});
export default router;
