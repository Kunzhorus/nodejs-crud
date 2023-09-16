const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));


//https request logger
app.use(morgan("combined"));


// Template engine setup
app.engine(
  ".hbs", 
  engine({ 
    extname: ".hbs",
    helpers: {
      sum: (a,b) => a+b,
    }
  }));
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");


//req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


//method override
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//Routes init
const route = require('./routes/index.js'); 
route(app)

//connect db
const db = require('./config/db/index.js')
db.connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
