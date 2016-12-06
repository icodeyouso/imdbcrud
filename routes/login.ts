import * as express from 'express';
let router = express.Router();


router.get('/', function(req, res, next) {
    console.log(req.body);
  res.send('respond with a resource');
});

export default router;