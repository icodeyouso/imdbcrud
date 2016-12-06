import * as mongoose from 'mongoose';

export interface IPokemon extends mongoose.Document {
    name:string,
    type:string,
    age:number,
    specialAttack:string
}
let schema = new mongoose.Schema({
    name:String,
    type:String,
    age:Number,
    specialAttack:String
})

export default mongoose.model<IPokemon>('Pokemon',schema);

