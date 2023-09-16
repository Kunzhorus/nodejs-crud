const Course = require('../models/Course')
const {multipleMongooseToObject} = require("../../ulti/mongoose")
class SiteController {
    index(req,res,next){
        // res.render('home');
        // const course =  await Course.find({}); 
        // res.json(course);
        Course.find({})
            .then(courses => {
                res.render('home',{courses : multipleMongooseToObject(courses)})

            })
            .catch(next)
    }
    

}

module.exports = new SiteController;