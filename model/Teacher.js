import mongoose from "mongoose";


// creating schema for teacher

const teacherSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    subject: { type: String }
})

// creating model for schema
const teacherModel = mongoose.model('teachers', teacherSchema);

// create
const createDoc = async(nm, ag, sub) =>{
    try {
        const teacherDoc = teacherModel({
            name : nm,
            age: ag,
            subject: sub
        })
        const result = await teacherDoc.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// read
const retrieveDoc = async() => {
    try {
        const result = await teacherModel.find({ subject: 'Bangla'}, {}, { limit: 2, sort: { age: 1}})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// update
const updateDoc = async() => {
    try {
        const result = await teacherModel.updateOne({ age:35}, { name: 'Paisi 54', subject: 'Bangla' }, { returnDocument: 'after'})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// delete
const deleteDoc = async() => {
    try {
        const result = await teacherModel.deleteMany({ age: 54})
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export { createDoc, retrieveDoc, updateDoc, deleteDoc }