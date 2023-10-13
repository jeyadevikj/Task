const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const taskRouter = require('./routes/task-routes')
const userRouter = require('./routes/user-routes')
require('./db/mongoose')



const app = express()
app.use(express.json())
// app.use(cors({
//     origin: 'http://localhost:3001',
//     credentials: true
// }))
app.use(cors());
app.use(cookieParser())
// app.use((req, res) => {
//     return res.status(503).json({message: 'Server under maintenance!'})
// })
app.use(taskRouter)
app.use(userRouter)



const port = process.env.PORT || 8082


app.listen(port, () => {
    console.log('Server is up at port: '+port);
})
