import express from 'express'
import { join } from 'path'
import connectDB from './db/connectDB.js'
import web from './routes/web.js'

const app = express();
const port = process.env.port || 8080;
const url = process.env.url || 'mongodb://127.0.0.1:27017'

app.set('view engine', 'ejs')
app.use(express.static(join(process.cwd(), 'public')))
app.use(express.urlencoded({ extended: false}))
app.use('/shinobi', web)

connectDB(url)


app.listen(port, ()=> {
 console.log(`Server is running at http://localhost:${port}/shinobi`);
})
