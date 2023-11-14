import express  from "express";
import {resolve} from 'path'
import mainRouter from "./router/mainRoutes.js";


const app = express()
app.set('views', resolve('./views'));
app.set('view engine', 'ejs');

app.use("/",express.static("assets"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/",mainRouter)

app.listen(process.env.PORT || 4444,()=>{
    console.log("server started ...")
})

