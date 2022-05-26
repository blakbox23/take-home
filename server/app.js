const express = require('express');
const { Agent } = require('./model');

const app = express();

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.get('/agents/2', async (req, res, next) => {
  const agents = await Agent.findByPk(2);
  return res.json(agents);
});



module.exports = app;
