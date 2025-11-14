const express = require('express')
const cors = require("cors");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
require("dotenv").config();

const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongo DB Connected Successfully")
    })
    .catch((err)=>{
        console.log("Error Occured",err)
    })

const userSchema=new mongoose.Schema({
    username:{type:String},
    email:{
        type:String,
        unique:true,
    },
    password:{type:String}

})
const movieSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],
    episodes_count:{type:Number},
    seasons_count:{type:Number},
    languages_available:[{type:String}],
})
const actionSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],
    languages_available:[{type:String}],
})
const romanticSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],
    languages_available:[{type:String}],
})
const emotionalSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],
    languages_available:[{type:String}],
})
const dramaSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],
    languages_available:[{type:String}],
})
const allmoviesSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],    
    languages_available:[{type:String}],
})
const seriesSchema=new mongoose.Schema({
    name: {type:String,unique:true},
    year:{type:Number},
    genre:[{type:String}],
    ratings:{type:Number,min:0,max:10},
    runtime:{type:String},
    thumbnail:{type:String},
    age_restriction:{type:String},
    story_line:{type:String},
    cast:[{type:String}],
    crew:[{type:String}],    
    episodes_count:{type:Number},
    seasons_count:{type:Number},
    languages_available:[{type:String}],
})

const User=mongoose.model("User",userSchema)
const Movie=mongoose.model("Movie",movieSchema)
const allMovies=mongoose.model("allMovies",allmoviesSchema)
const Actions=mongoose.model("Actions",actionSchema)
const Drama=mongoose.model("Drama",dramaSchema)
const Emotional=mongoose.model("Emotional",emotionalSchema)
const Romantic=mongoose.model("Romantic",romanticSchema)
const Series=mongoose.model("Series",seriesSchema)

const app=express()
app.use(cors())
app.use(express.json());

const authMiddleware=(req,res,next)=>{
    const token=req.header("Authorization")
    if(!token) return res.json({message:"No token."})
    try{
        const decoded=jwt.verify(token,"QWERTYistheSecretKey")
        req.logger=decoded
        next();
}
catch(e){
    res.json({message:"Invalid token"})
}
}

app.post("/",async(req,res)=>{
    try{
    const newMovie= new Movie(req.body);
    await newMovie.save();
    console.log("New Movie Added Successfully")  
    res.status(201).json({message:"New Movie Added Successfully"})      
    }
    catch(err){
        console.log("Error Occured during Movie Creation",err);
        res.status(404).json({message:"Movie Creation Failed"}) 
    }
})
app.post("/api/action",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await Actions.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new Actions(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/drama",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await Drama.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new Drama(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/emotional",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await Emotional.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new Emotional(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/romantic",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await Romantic.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new Romantic(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/allmovies",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await allMovies.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new allMovies(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/series",async(req,res)=>{
    try{
     if (Array.isArray(req.body)) {
      // ✅ if body contains multiple movies
      await Series.insertMany(req.body);
      console.log("✅ Multiple movies added successfully!");
      res.status(201).json({ message: "Multiple movies added successfully" });
    } else {
      // ✅ single movie insert
      const newMovie = new Series(req.body);
      await newMovie.save();
      console.log("✅ Single movie added successfully!");
      res.status(201).json({ message: "Single movie added successfully" });
    }
}
catch(err){
    console.log("Error Occured During action movie")
}
})
app.post("/api/register",async(req,res)=>{
    const {username,email,password}=req.body;
    const isexist=await User.findOne({email})
    if(isexist) return res.status(401).json({message:"User already Exists"})
    
    const hashedpassword=await bcrypt.hash(password,10)
    const newUser=new User({username,email,password:hashedpassword})
    await newUser.save()
    res.json({message:"New User Registered successfully"})
})
app.post("/api/login",async(req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username})
    if(!user) return res.status(401).json({message:"User not exist"})
    
    const check=await bcrypt.compare(password,user.password);
    if(!check){
        return res.status(401).json({message:"Wrong Password"})
    }
    const token=jwt.sign({id:user._id},"QWERTYistheSecretKey")
    res.json({message:"Login Success",token})

})

app.get("/",async(req,res)=>{
    const allMovie=await Movie.find();
    res.send(allMovie)
})
app.get("/api/action",async(req,res)=>{
    const allMovie=await Actions.find();
    res.send(allMovie)
})
app.get("/api/drama",async(req,res)=>{
    const allMovie=await Drama.find();
    res.send(allMovie)
})
app.get("/api/emotional",async(req,res)=>{
    const allMovie=await Emotional.find();
    res.send(allMovie)
})
app.get("/api/allmovies",async(req,res)=>{
    const allMovie=await allMovies.find();
    res.send(allMovie)
})
app.get("/api/series",async(req,res)=>{
    const allMovie=await Series.find();
    res.send(allMovie)
})
app.get("/api/romantic",async(req,res)=>{
    const allMovie=await Romantic.find();
    res.send(allMovie)
})
app.get("/api/profile",authMiddleware,async(req,res)=>{
    const logger=req.logger.id
    // console.log(logger)
    const data=await User.findById(logger)
    if(data) return res.json({data})
    return res.json({message:"failed to fetch"})
})





app.listen(process.env.PORT,()=>{
    console.log("SERVER RUNNING AT PORT :",process.env.PORT)
})