const express = require('express');
const { Agent } = require('./model');

const app = express();

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/agents/:id', async (req, res, next) => {
  const agent = await Agent.findByPk(req.params.id);
  return res.json(agent); 
});



module.exports = app;
