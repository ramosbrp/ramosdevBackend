import express from 'express';

const Email  = require('./Controllers/Email.controller');
const routes = express.Router();

routes.get('/save', Email.save);

module.exports = routes;