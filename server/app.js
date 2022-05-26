const express = require('express');
const { Agent } = require('./model');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/agents/:id', async (req, res, next) => {
  const agent = await Agent.findByPk(req.params.id);
  return res.json(agent); 
});

app.post('/agents/add', (req, res) => {

  // let{firstName, lastName, photoUrl, agentLicence, address, practiceAreas, aboutMe} = req.body;
  Agent.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName, 
    photoUrl: req.body.photoUrl, 
    firstName: req.body.agentLicence, 
    agentLicence: req.body.address, 
    address: req.body.practiceAreas, 
    practiceAreas: req.body.aboutMe,
    aboutMe: req.body.aboutMe
  })
  .then(() => res.redirect('/'))
  .catch(err=> console.log(err))
});



module.exports = app;
