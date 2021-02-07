const db = require("../models");
const passport = require("passport")

module.exports = function(app){

  app.post('/api/signup',(req,res)=>{
    db.User.create({
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:req.body.password,
      day:req.body.day,
      month:req.body.month,
      year:req.body.year
    }).then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});
  //   .then((answer) =>res.json(answer))
  // });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect(307,"/results")
    // res.json(req.user);
    // res.json(req.user);
  });

  app.get('/api/user',(req,res)=>{
    db.user.findAll({}).then((answer) =>res.json(answer))
  });

  app.post('/api/compat',(req,res)=>{
    db.compatibility.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/compat',(req,res)=>{
    db.compatibility.findAll({}).then((answer) =>res.json(answer))
  });

  app.post('/api/bio',(req,res)=>{
    db.biorhythm.create(req.body).then((answer) =>res.json(answer))
  });

  app.get('/api/bio',(req,res)=>{
    db.biorhythm.findAll({}).then((answer) =>res.json(answer))
  });

}

