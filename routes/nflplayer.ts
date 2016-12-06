import * as express from 'express';
import * as mongoose from 'mongoose';
import NflPlayer from '../models/nflplayers';
let router = express.Router();


router.get('/nflplayer',function(req, res, next){
    NflPlayer.find().then((nflplayer)=> {
        res.send(nflplayer);
    })
})
export = router;