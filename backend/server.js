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
    password:{type:String},
    wishlist:[{type:String}]


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
app.use(cors({
  origin: ['https://flixplore-ai.vercel.app'] 
}));
// app.use(cors())
app.use(express.json());

const authMiddleware=(req,res,next)=>{
    const token=req.header("Authorization")?.replace("Bearer ", "");
    if(!token) return res.status(401).json({message:"No token."})
    try{
        const decoded=jwt.verify(token,"QWERTYistheSecretKey")
        req.logger=decoded
        next();
}
catch(e){
    return res.status(401).json({message:"Invalid token"})
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
    const user=await User.findOne({email})
    const token=jwt.sign({id:user._id},"QWERTYistheSecretKey")
    res.json({message:"Login Success",token})
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
app.post("/api/wishlist",authMiddleware,async(req,res)=>{
    const {wishlist,headers}=req.body;
    const userID=req.logger.id;
    const user=await User.findById(userID)
    if(!user) return res.status(401).json({message:"user Not found"})
    if(user.wishlist.includes(wishlist)){
        return res.status(401).json({message:"Movie already in list"})
    }
    user.wishlist.push(wishlist)
    await user.save()
    console.log("ADDED: ",user.wishlist)
    res.json("Successfully added",user.wishlist)
})

app.post("/api/smartbot", async (req, res) => {
  try {
    const { message = "" } = req.body;
    const text = message.toString().trim().toLowerCase();

    if (!text) {
      return res.json({ reply: "Say something — e.g. 'suggest me action films' ", movies: [] });
    }

    // helper to escape regex
    const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // build fuzzy pattern for a word (loosely matches characters in order)
    const fuzzyFor = (w) => new RegExp(w.split("").map(esc).join(".*"), "i");

    // tokens and quick flags
    const tokens = text.split(/\s+/).filter(Boolean);
    const isAll = /\b(all|everything|all movies|all films)\b/.test(text);
    const isSeriesOnly = /\b(series|web ?series|tv|show|shows)\b/.test(text);
    const wantsTopN = /top\s*(\d{1,2})/.exec(text);
    const topN = wantsTopN ? Math.min(50, Number(wantsTopN[1])) : null; // limit to 50 max

    // detect precise person patterns: "list lokesh films", "movies by lokesh", "directed by lokesh"
    const personMatch =
      text.match(/(?:list|show|all)?\s*(.+?)\s*(?:films|movies|series)?$/) &&
      (/\b(list|movies by|films by|directed by|directed|by)\b/.test(text) || text.split(" ").length <= 2);

    // better person extraction for "movies by X" or "list X films"
    const nameMatch =
      text.match(/movies by (.+)$/) ||
      text.match(/films by (.+)$/) ||
      text.match(/directed by (.+)$/) ||
      text.match(/list (.+?) films$/) ||
      text.match(/list (.+?) movies$/) ||
      text.match(/^(.+?) films$/) ||
      text.match(/^(.+?) movies$/);

    // genre combination parsing: supports "action+love" or "action love" or "action and love"
    const plusSplit = text.includes("+") ? text.split("+").map(s => s.trim()).filter(Boolean) : null;

    // Build generic OR conditions for a given keyword
    const orFor = (word) => {
      // create patterns
      const re = new RegExp(esc(word), "i");         // exact-ish substring
      const fuzzy = fuzzyFor(word);                  // fuzzy sequence match

      return [
        { name: { $regex: re } },
        { story_line: { $regex: re } },
        { overview: { $regex: re } },
        { genre: { $regex: re } },
        { languages_available: { $regex: re } },
        { cast: { $elemMatch: { $regex: re } } },
        { crew: { $elemMatch: { $regex: re } } },
        // fuzzy fallbacks
        { name: { $regex: fuzzy } },
        { story_line: { $regex: fuzzy } },
        { overview: { $regex: fuzzy } },
        { cast: { $elemMatch: { $regex: fuzzy } } },
        { crew: { $elemMatch: { $regex: fuzzy } } },
      ];
    };

    // If user asked for "list <person> films" or similar -> do PERSON-precise query
    if (nameMatch) {
      const person = nameMatch[1].trim();
      // if person becomes a short word like 'action', this will still search cast/crew/director
      const personRegex = new RegExp(esc(person), "i");
      const personQuery = {
        $or: [
          { cast: { $elemMatch: { $regex: personRegex } } },
          { crew: { $elemMatch: { $regex: personRegex } } },
          { director: { $regex: personRegex } },
        ],
      };

      // search across all collections
      const [m1, m2, a, r, d, e, s] = await Promise.all([
        allMovies.find(personQuery).limit(50),
        Series.find(personQuery).limit(50),
        Actions.find(personQuery).limit(50),
        Romantic.find(personQuery).limit(50),
        Drama.find(personQuery).limit(50),
        Emotional.find(personQuery).limit(50),
        // if you have other collections add here
      ]);

      const results = [...m1, ...m2, ...a, ...r, ...d, ...e].slice(0, topN || 50);

      return res.json({
        reply: results.length ? `Here are titles related to "${person}"` : `No titles found for "${person}"`,
        movies: results,
      });
    }

    // If user asked "all" or "all movies" -> return everything (with optional top sorting)
    if (isAll && !isSeriesOnly) {
      const [m1, a, r, d, e] = await Promise.all([
        allMovies.find({}).limit(100),
        Actions.find({}).limit(100),
        Romantic.find({}).limit(100),
        Drama.find({}).limit(100),
        Emotional.find({}).limit(100),
      ]);
      let combined = [...m1, ...a, ...r, ...d, ...e];
      // if topN present, sort by ratings desc
      if (topN) combined = combined.sort((x, y) => (y.ratings || 0) - (x.ratings || 0)).slice(0, topN);
      return res.json({ reply: "All titles", movies: combined.slice(0, topN || 50) });
    }

    // Build wide OR query for tokens or plusSplit
    let orQuery = [];

    // If user explicitly provided genres using plus or "and", treat each part as a MUST genre (intersection)
    if (plusSplit && plusSplit.length > 0) {
      // e.g. love+action => find entries that have both genres
      const genreRegexes = plusSplit.map(g => new RegExp(esc(g), "i"));
      // build intersection queries across collections using $and of genre regexes
      const q = { $and: genreRegexes.map(r => ({ genre: { $regex: r } })) };
      const results = await Promise.all([
        allMovies.find(q).limit(50),
        Series.find(q).limit(50),
        Actions.find(q).limit(50),
        Romantic.find(q).limit(50),
        Drama.find(q).limit(50),
        Emotional.find(q).limit(50),
      ]);
      const combined = results.flat();
      return res.json({ reply: combined.length ? "Matches for combined genres" : "No matches", movies: combined.slice(0, topN || 50) });
    }

    // If the user asked specifically "series" alone or included series flag, prefer series
    if (isSeriesOnly && !isAll) {
      // build OR from tokens
      tokens.forEach(t => {
        orQuery.push(...orFor(t));
      });
      // also include explicit series check
      orQuery.push({ seasons_count: { $gt: 0 } }, { episodes_count: { $gt: 0 } });

      const [s1] = await Promise.all([Series.find({ $or: orQuery }).limit(topN || 50)]);
      if (!s1 || s1.length === 0) {
        return res.json({ reply: "No series found matching that query", movies: [] });
      }
      return res.json({ reply: "Here are matching series", movies: s1.slice(0, topN || 50) });
    }

    // For ranking by rating request: detect phrases like "top 5 highly rated action films"
    const topRatedMatch = text.match(/top\s*(\d{1,2})\s*(highly rated|rated|best|top)?\s*(.+)?/);
    let wantsTopRated = false;
    let topCount = 0;
    let topGenre = null;
    if (topRatedMatch) {
      wantsTopRated = true;
      topCount = Math.min(Number(topRatedMatch[1]) || 5, 50);
      topGenre = topRatedMatch[3] ? topRatedMatch[3].trim() : null;
    }

    // Default broad search (tokens)
    tokens.forEach(tok => {
      orQuery.push(...orFor(tok));
    });

    // If tokens is empty (shouldn't happen) return nothing
    if (orQuery.length === 0) {
      return res.json({ reply: "Try keywords like 'action', 'vijay', 'series', 'top 5' etc.", movies: [] });
    }

    // Query all collections in parallel
    const [mAll, sAll, aAll, rAll, dAll, eAll] = await Promise.all([
      allMovies.find({ $or: orQuery }).limit(200),
      Series.find({ $or: orQuery }).limit(200),
      Actions.find({ $or: orQuery }).limit(200),
      Romantic.find({ $or: orQuery }).limit(200),
      Drama.find({ $or: orQuery }).limit(200),
      Emotional.find({ $or: orQuery }).limit(200),
    ]);

    let combined = [...mAll, ...sAll, ...aAll, ...rAll, ...dAll, ...eAll];

    // dedupe by name (keep first)
    const seen = new Set();
    combined = combined.filter(item => {
      const key = (item.name || "").toString().toLowerCase();
      if (!key) return false;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    // If user wanted top-rated results, filter by genre if provided and sort
    if (wantsTopRated) {
      if (topGenre) {
        const re = new RegExp(esc(topGenre), "i");
        combined = combined.filter(it => (it.genre || []).some(g => re.test(g)) || re.test(it.name || "") || re.test(it.story_line || ""));
      }
      combined = combined.sort((a, b) => (b.ratings || 0) - (a.ratings || 0)).slice(0, topCount);
      return res.json({ reply: `Top ${topCount} rated results${topGenre ? ` for ${topGenre}` : ""}`, movies: combined });
    }

    // If token includes explicit genre words like "action", prefer genre filtering
    const knownGenres = ["action","romance","romantic","drama","emotional","thriller","comedy","horror","scifi","sci-fi","sci fi"];
    const genreToken = tokens.find(t => knownGenres.includes(t));
    if (genreToken) {
      const re = new RegExp(esc(genreToken), "i");
      combined = combined.filter(it => (it.genre || []).some(g => re.test(g)));
    }

    // final limit & respond
    const final = combined.slice(0, topN || 20);

    if (!final.length) {
      return res.json({ reply: "No matches found 😢 Try actor/genre/language/movie name.", movies: [] });
    }

    res.json({ reply: `Found ${final.length} results`, movies: final });

  } catch (err) {
    console.error("SMARTBOT ERROR:", err);
    res.status(500).json({ error: "Bot Error" });
  }
});









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
app.get("/api/wishlist",authMiddleware,async(req,res)=>{
    const userID=req.logger.id
    if(!userID) return res.status(401).json({message:"Login needed for wishlist"})
    const data=await User.findById(userID)  
    if(data) return res.json(data.wishlist)
    console.log("..from server")
    return res.status(401).json({message:"Unable to fetch"})
})




app.listen(process.env.PORT,()=>{
    console.log("SERVER RUNNING AT PORT :",process.env.PORT)
})