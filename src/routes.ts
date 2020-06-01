import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message: 'success'});
});

routes.get('/users', (req, res) => {
  return res.send('Hello Next Level Week');
});

export default routes;