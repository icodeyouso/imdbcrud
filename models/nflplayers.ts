import * as mongoose from 'mongoose';

export interface INflplayer extends mongoose.Document {
    name:string,
    position:string,
    number:number,
    
}
let schema = new mongoose.Schema({
    name:String,
    position:String,
    number:Number,
    
})

export default mongoose.model<INflplayer>('Nflplayer',schema);

