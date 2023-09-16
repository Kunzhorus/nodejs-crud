const Course = require("../models/Course");
const { mongooseToObject } = require("../../ulti/mongoose");
const { mongo } = require("mongoose");
const {multipleMongooseToObject} = require("../../ulti/mongoose")
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }

  //get
  create(req, res, next) {
    res.render("courses/create");
  }

  //post
  store(req, res, next) {
    const course = new Course(req.body);
    course.save()
        .then(() => res.redirect("/"));
  }
  
  //get
  all(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("courses/all", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  //get
  edit(req, res, next) {
    Course.findById(req.params.id)
        .then( course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next)
  }

  //put
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then( () =>  res.redirect('/courses/all')  )
      .catch(next)
   
  }

  delete(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then( () => res.redirect('/courses/all')  )
      .catch(next)
  }

}

module.exports = new CourseController();
