const routes = require('express').Router();

const picsRouter = require('./picsRouter');
const categoryRouter = require('./categoryRouter');
const tagsRouter = require('./tagsRouter');
const signinRouter = require('./signinRouter');
const loginRouter = require('./loginRouter');

routes.use('/pics', picsRouter);
routes.use('/category', categoryRouter);
routes.use('/tags', tagsRouter);
routes.use('/signin', signinRouter);
routes.use('/login', loginRouter);

module.exports = routes;