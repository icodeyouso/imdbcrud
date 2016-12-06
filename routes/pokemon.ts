import * as express from 'express';
import * as mongoose from 'mongoose';
import Pokemon from '../models/pokemon';
let router = express.Router();


router.get('/pokemon',function(req, res, next){
    Pokemon.find().then((pokemon)=> {
        res.send(pokemon);
    })
})
export = router;