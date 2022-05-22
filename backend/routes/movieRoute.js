
const { Router } = require("express")
const MovieSchema = require("../models/Movies")
const router = Router()
let { storage } = require("../middlewares/Multer")
const multer = require("multer")
const upload = multer({ storage: storage })
router.post('/movie-data', upload.single("movieImage"), async (req, res) => {
    console.log(req.body)
    try {
        let movieImage = req.file
        let { movie_title, movie_language, movie_duration, movie_genre } = req.body
        let payload = {
            movie_duration,
            movie_genre,
            movie_language,
            movie_title,
            movieImage
        }
        console.log(req.files)
        let Movies = await MovieSchema.create(payload)
        res.status(201).json({message: "Successfully stored ",Movies})
        
    } catch (error) {
        console.log(error)
        res.status(501).json({message :"server error"})
    }
})
module.exports = router