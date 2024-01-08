const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newDb")
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));





const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})



//collection creation 
const Playlist = new mongoose.model("Playlist", playlistSchema);


//create document or insert
const createDocument  = async ( ) => {
    try{
        
        const jsPlaylist = new Playlist({
            name: "javascript",
            ctype: "front-end",
            videos: 150,
            active: true
        }) 
        const mongoPlaylist = new Playlist({
            name: "mongoDB",
            ctype: "database",
            videos: 47,
            active: true
        })
        const expressPlaylist = new Playlist({
            name: "express JS",
            ctype: "back-end",
            videos: 20,
            active: true
        })
        const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,expressPlaylist])
        console.log(result);
    } catch(err){
        console.log(err);
    }
}
//createDocument()

const getDocument = async () => {
    
        const result = await Playlist.find({ctype:"database"})
        console.log(result);
    
}

getDocument();



