import mongoose from "mongoose";

const narutoShema = new mongoose.Schema({
    name: { type: String, required:true},
    age: { type: Number, required: true},
    clan: { type: String },
    cn: { type: String },
    active: { type: String}
})

const narutoModel = mongoose.model('shinobi', narutoShema)

export { narutoModel }