import express from 'express' 
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js'
import DeviceRoute from './routes/DeviceRoute.js'
dotenv.config()

const app = express()

app.use(cors({
    credentials: false,
    origin: ['http://localhost:5173', 'https://smarthome-indonesia.vercel.app']
}))
app.use(express.json())

app.get('/', (req, res) => {
   res.status(200).json({'msg' : 'succes'})
})
app.use(UserRoute)
app.use(DeviceRoute)

app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT)
})