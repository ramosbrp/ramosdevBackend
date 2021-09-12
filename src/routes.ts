import express from 'express';

const Email  = require('./Controllers/EmailController');
const routes = express.Router();

routes.get('/', Email.save);

module.exports = routes;