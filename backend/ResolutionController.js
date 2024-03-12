const ResolutionModel = require('./ResolutionModel');

//GET

module.exports.getResolution = async(req, res) => {
    const myResolution = await ResolutionModel.find();
    res.send(myResolution)
}

//POST

module.exports.saveResolution = async(req, res) => {
    const { name } = req.body; 
    ResolutionModel.create = ({ name })
    .then((data) => {console.log("ADDED")
    res.send(data)
})
}
