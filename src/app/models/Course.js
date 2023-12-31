const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Course = new Schema({
    name: {type: String},
    description: {type: String},
    videoId: {type: String},
    slug: {type: String, slug:'name', unique: true}
},{timestamps: true});

module.exports = mongoose.model('Course', Course)