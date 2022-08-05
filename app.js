import connectDB from './db/connectDB.js'
import { createDoc, retrieveDoc, updateDoc, deleteDoc } from './model/Teacher.js'
const url = 'mongodb://127.0.0.1:27017/'




connectDB(url)

// createDoc('Rita madam', 44, 'Bangla') // create
// retrieveDoc() // read
// updateDoc() // update
// deleteDoc() // delete

