import * as Express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import queryFile from '../../db/queryFile';
import { File } from '../../operations/file';
const router = Express.Router();

router.get('/download', (req: any, res: any) => {
  const id = path.normalize(req.query.id);
  queryFile(id).then((result) => {
    if (!result) {
      res.status(404);
      res.send('file not exist');
      res.end();
      return;
    }
    const down = new File(result.filename, result.hash);
    down.download(res);
  });
});

router.get('/register', (req: any, res: any) => {
  res.render('user/register');
});
router.get('/login', (req: any, res: any) => {
  res.render('user/login');
});

router.get('/info', (req: any, res: any) => {
  res.render('user/info');
});

router.get('/:id', (req: any, res: any) => {
  if (!isNaN(req.params.id)) {
    res.render('user/user');
  } else {
    res.send('404');
  }
});

router.get('/:id/file/:fileid', (req: any, res: any) => {
  res.render('user/filedetails');
});
export default router;
