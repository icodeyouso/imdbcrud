import * as mongoose from 'mongoose';

export interface INbaplayer extends mongoose.Document {
    name:String,
    position:String,
    number:number
}

let schema = new mongoose.Schema({
    name:String,
    position:String,
    number:{type:Number}
})

export default mongoose.model<INbaplayer>('nbaplayer',schema);