import * as Express from 'express';
const router = Express.Router();

router.get('/login', (req: any, res: any) => {
  res.render('admin/login');
});

router.get('/logout', (req: any, res: any) => {
  req.session.user = null;
  res.render('admin/login');
});

router.get('/update', (req: any, res: any) => {
  res.render('admin/setting', { admin: req.session.user });
});

router.get('/users', (req: any, res: any) => {
  res.render('admin/back-user', { admin: req.session.user });
});

router.get('/sites', (req: any, res: any) => {
  res.render('admin/back-count', { admin: req.session.user });
});
/**
 * 文件分类
 */
router.get('/file/category', (req: any, res: any) => {
  res.render('admin/back-file-category', { admin: req.session.user });
});

export default router;
