const express = require('express');
const cors = require('cors');
const {homeRoute,adminRoute} = require('./Route');

const app = express();

app.use(cors());
app.use(express.json());  
// Use the routes defined in apiRoutes
app.use('/home', homeRoute);
app.use('/admin', adminRoute);

app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});