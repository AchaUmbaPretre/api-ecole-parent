import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import elevesRoute from './routes/eleves.js'
import inscriptionsRoute from './routes/inscriptions.js'
import presencesRoute from './routes/presences.js'
import profRoute from './routes/prof.js'
import publicationsRoute from './routes/publications.js'
import cookieParser from 'cookie-parser'


dotenv.config();
const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.use('/api/auth', authRoute)
app.use('/api/eleves', elevesRoute)
app.use('/api/inscription', inscriptionsRoute)
app.use('/api/presences', presencesRoute)
app.use('/api/prof', profRoute)
app.use('/api/publications', publicationsRoute)

app.listen(process.env.PORT, () =>{
    console.log('connection backend')})