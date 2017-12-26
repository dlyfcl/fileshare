import * as Express from 'express';
import * as multer from 'multer';
import { error } from 'util';
import { File } from '../../operations/file';
import { User } from '../../operations/user';
const user = new User();

const router = Express.Router();
router.post('/', async (req: any, res: any) => {
  switch (req.body.action) {
    case 'register':
      const id = await user.register(req.body);
      if (!id) {
        res.send('false');
        return;
      }
      res.send('ok');
      break;
    case 'login':
      const userInfo = await user.login(req.body);
      if (!userInfo) {
        res.send('false');
        return;
      }
      req.session.userid = userInfo.id;
      res.json(userInfo);
      break;
    default:
      res.send('error');
  }
});
router.get('/', async (req: any, res: any) => {
  const userId = req.session.userid || 0;
  const sql = 'select * from user where id=' + userId + ';';
  const file = new File('', '');
  await file.getFiles(req, res, sql);
});
// 文件操作
router.get('/:type', async (req: any, res: any) => {
  let sql: string;
  const file = new File('', '');
  const userId = req.session.userid || 0;
  switch (req.params.type) {
    case 'allFiles':
      sql =
        'select * from file join user_file on (file.id=user_file.file) where user_file.user=' +
        userId +
        ';';
      await file.getFiles(req, res, sql);
      break;
    case 'unchecked':
      sql = 'select * from pending_file where user=' + userId + ';';
      await file.getFiles(req, res, sql);
      break;
    default:
      sql =
        'select * from file join user_file on (file.id=user_file.file and file.type=\'' +
        req.params.type +
        '\') where user_file.user=' +
        userId +
        ';';
      await file.getFiles(req, res, sql);
  }
});

export default router;
