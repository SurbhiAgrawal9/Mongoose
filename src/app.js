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


const reactPlaylist = new Playlist({
    name: "React js",
    ctype: "front end",
    videos: 50,
    active: true
})


reactPlaylist.save()