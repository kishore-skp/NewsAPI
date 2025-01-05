const {ExecuteDB} = require("../DAL/sqlDAL")

const InsertArticle = async (req, res) => {
    try {

      const sqlQuery = `
            INSERT INTO Articles (
                ARTICLE_TITLE,
                ARTICLE_ENG_TITLE,
                ARTICLE_SUMMARY,
                ARTICLE_IMAGE_URL,
                ARTICLE_CONTENT,
                ARTICLE_CATEGORY,
                ARTICLE_CREDITS,
                ARTICLE_KEYWORDS
            )
            VALUES (
                '${req.body.ARTICLE_TITLE}', 
                '${req.body.ARTICLE_ENG_TITLE}', 
                '${req.body.ARTICLE_SUMMARY}', 
                '${req.body.ARTICLE_IMAGE_URL}', 
                '${req.body.ARTICLE_CONTENT}', 
                '${req.body.ARTICLE_CATEGORY}', 
                '${req.body.ARTICLE_CREDITS}', 
                '${req.body.ARTICLE_KEYWORDS}'
            );
        `;

    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const UpdateArticles = async (req, res) => {
    try {

      const sqlQuery = `
      UPDATE Articles
      SET 
        ARTICLE_TITLE = '${req.body.ARTICLE_TITLE}',
        ARTICLE_ENG_TITLE = '${req.body.ARTICLE_ENG_TITLE}',
        ARTICLE_SUMMARY = '${req.body.ARTICLE_SUMMARY}',
        ARTICLE_IMAGE_URL = '${req.body.ARTICLE_IMAGE_URL}',
        ARTICLE_CONTENT = '${req.body.ARTICLE_CONTENT}',
        ARTICLE_CATEGORY = ${req.body.ARTICLE_CATEGORY},
        ARTICLE_CREDITS = '${req.body.ARTICLE_CREDITS}',
        ARTICLE_KEYWORDS = '${req.body.ARTICLE_KEYWORDS}'
      WHERE 
        ARTICLE_ID = ${req.body.ARTICLE_ID};
    `;
    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const DeleteArticles = async (req, res) => {
    try {

      const sqlQuery = `DELETE FROM Articles WHERE ARTICLE_ID = '${req.body.ARTICLE_ID}';`;
    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const InsertCategory = async (req, res) => {
    try {

      const sqlQuery = ` INSERT INTO Categories (CATEGORY_NAME) VALUES ('${req.body.CATEGORY_NAME}');`;

    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const UpdateCategory = async (req, res) => {
    try {

      const sqlQuery = `UPDATE Categories
      SET CATEGORY_NAME = '${req.body.CATEGORY_NAME}'
      WHERE CATEGORY_ID = ${req.body.CATEGORY_ID};
    `;
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const DeleteCategory = async (req, res) => {
    try {

      const sqlQuery = `DELETE FROM Categories WHERE CATEGORY_ID = '${req.body.CATEGORY_ID}';`;
    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };

  const InsertAdvertisements = async (req, res) => {
    try {

      const sqlQuery = `INSERT INTO Advertisements (AD_IMAGE_URL, AD_TYPE, AD_PUBLISHED_DATE_TIME, AD_ACTIVE)
                        VALUES ('${req.body.AD_IMAGE_URL}', '${req.body.AD_TYPE}', '${req.body.AD_PUBLISHED_DATE_TIME}', ${req.body.AD_ACTIVE});`;

    
      const result = await ExecuteDB(sqlQuery)
      res.status(200).json(result.rowsAffected[0]);
      
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' + error });
    }
  };


  module.exports = {InsertCategory, InsertArticle, InsertAdvertisements, DeleteArticles, UpdateArticles,
    DeleteCategory, UpdateCategory
  }