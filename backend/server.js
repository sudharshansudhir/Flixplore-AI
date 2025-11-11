const express = require('express')
const cors = require("cors");
require("dotenv").config();

const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Mongo DB Connected Successfully")
    })
    .catch((err)=>{
        console.log("Error Occured",err)
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





app.listen(process.env.PORT,()=>{
    console.log("SERVER RUNNING AT PORT :",process.env.PORT)
})