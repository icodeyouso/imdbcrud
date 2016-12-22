import * as express from 'express';
import * as mongoose from 'mongoose';
import nbaplayers from '../models/nbaplayers';
let router = express.Router();

router.get('/nbaplayers',function(req, res, next){
    nbaplayers.find({},{ "series._id":0,_id:0}).then((players)=>{
     res.send(players);
    }).catch((err)=>{
     console.log(err);
    })
    
    

})

export = router;
