import { Router } from "express";

const mainRouter = Router()

mainRouter.get('/',(req,res)=>{
    res.render("pages/index")
})

mainRouter.get('/about_vision',(req,res)=>{
    res.render("pages/about_vision")
})
mainRouter.get('/about_founder',(req,res)=>{
    res.render("pages/about_founder")
})
mainRouter.get('/about_principal',(req,res)=>{
    res.render("pages/about_principal")
})
mainRouter.get('/class',(req,res)=>{
    res.render("pages/class")
})
mainRouter.get('/team',(req,res)=>{
    res.render("pages/team")
})
mainRouter.get('/gallery',(req,res)=>{
    res.render("pages/gallery")
})
mainRouter.get('/blog',(req,res)=>{
    res.render("pages/blog")
})
mainRouter.get('/careers',(req,res)=>{
    res.render("pages/careers")
})
mainRouter.get('/single',(req,res)=>{
    res.render("pages/single")
})
mainRouter.get('/contact',(req,res)=>{
    res.render("pages/contact")
})

export default mainRouter

