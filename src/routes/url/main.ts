import express = require('express');
const router = express.Router();

router.get('/', (req: any, res: any) => {
  res.render('index');
});
router.get('/hots/video', (req: any, res: any) => {
  res.render('show');
});
router.get('/hots/zip', (req: any, res: any) => {
  res.render('show');
});
router.get('/hots/image', (req: any, res: any) => {
  res.render('show');
});
router.get('/hots/doc', (req: any, res: any) => {
  res.render('show');
});
export default router;
