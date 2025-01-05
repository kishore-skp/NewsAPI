const express = require('express');
const homeContoller = require('./Controller/homeController')
const adminController = require('./Controller/AdminController')

//AdminAPI
const adminRoute = express.Router();
//PublishArticle
adminRoute.post('/publishArticle', adminController.InsertArticle);
adminRoute.post('/deleteArticle', adminController.DeleteArticles);
adminRoute.post('/updateArticle', adminController.UpdateArticles);
adminRoute.post('/addCategory', adminController.InsertCategory);
adminRoute.post('/updateCategory', adminController.UpdateCategory);
adminRoute.post('/deleteCategory', adminController.DeleteCategory);
adminRoute.post('/publishAdvertisement', adminController.InsertAdvertisements);




//HomePageAPI
const homeRoute = express.Router();
homeRoute.get('/load', homeContoller.getHomeData);

module.exports = { homeRoute, adminRoute };