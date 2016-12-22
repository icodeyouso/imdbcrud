import * as mongoose from 'mongoose';

export interface INbaseries {
    team:String,
    result:number,
    location:number,
    series:number
}

export interface INbaplayer extends mongoose.Document {
    name:String,
    position:String,
    logo:String,
    number:number,
    image:String,
    series:INbaseries
}
let seriesSchema = new mongoose.Schema({
    team:String,
    result:Number,
    location:Number,
    series:Number
    
})
let schema = new mongoose.Schema({
    name:String,
    position:String,
    logo:String,
    number:{type:Number},
    image:String,
    series:seriesSchema
})

export default mongoose.model<INbaplayer>('NbaPlayer',schema);