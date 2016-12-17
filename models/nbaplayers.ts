import * as mongoose from 'mongoose';

export interface INbacareer {
    averagePoints:number,
    averageRebounds:number,
    averageAssists:number
}

export interface INbaplayer extends mongoose.Document {
    name:String,
    position:String,
    logo:String,
    number:number,
    image:String,
    career:INbacareer
}
let careerSchema = new mongoose.Schema({
    averagePoints:Number,
    averageRebounds:Number,
    averageAssists:Number
})
let schema = new mongoose.Schema({
    name:String,
    position:String,
    logo:String,
    number:{type:Number},
    image:String,
    career:careerSchema
})

export default mongoose.model<INbaplayer>('NbaPlayer',schema);