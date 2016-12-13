import * as express from 'express';
import nflplayer from '../models/nflplayers'
 let router = express.Router();

 router.get('/nflplayer',function(req, res, next){
     nflplayer.find().then((players)=> {
         res.json(players);

     })
 })
 export = router;