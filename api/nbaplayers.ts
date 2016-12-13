import * as express from 'express';
import * as mongoose from 'mongoose';
import nbaplayers from '../models/nbaplayers';
let router = express.Router();

router.get('/nbaplayers',function(req, res, next){
    nbaplayers.find().then((players)=>{
    res.send(players);
    }) 
    
    

})

export = router;
