import express from 'express';

const Email  = require('./Controllers/email');
const routes = express.Router();

routes.get('/', Email.index);

module.exports = routes;