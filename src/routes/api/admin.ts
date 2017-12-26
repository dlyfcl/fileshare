import * as Express from 'express';
import { Admin } from '../../operations/admin';
const admin = new Admin();
const router = Express.Router();

/* 管理员 */

router.post('/', (req: any, res: any) => {
  switch (req.body.action) {
    case 'login':
      const admin2 = new Admin(req, res);
      admin2.adminLogin(req, res);
      break;
  }
});

// 获取所有用户信息
router.get('/users', (req: any, res: any) => {
  // const admin1 = new Admin(req, res);
  // admin1.getUsers(req, res);
  const admin1 = new Admin(req, res);
  admin1.getUsers(req, res);
});

// 获取单个用户信息
router.get('/users/:name', (req: any, res: any) => {
  const admin4 = new Admin(req, res);
  admin4.searchUser(req, res);
});

// 获取统计信息
router.get('/sites', (req: any, res: any) => {
  const admin6 = new Admin(req, res);
  admin6.getSites(req, res);
});

// 用户操作分区
router.post('/users', (req: any, res: any) => {
  switch (req.body.action) {
    case 'delete':
      deleUser(req, res);
      break;
    case 'reset':
      resetPwd(req, res);
      break;
  }
});

// 删除指定用户
const deleUser = (req: any, res: any) => {
  const admin2 = new Admin(req, res);
  admin2.deleUser(req, res);
};

// 重置指定用户的密码为000000(hash)
const resetPwd = (req: any, res: any) => {
  const admin3 = new Admin(req, res);
  admin3.resetPwd(req, res);
};

export default router;
