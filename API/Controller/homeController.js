const { ExecuteDB } = require("../DAL/sqlDAL")

const getHomeData = async (req, res) => {
  try {
    const sqlQuery = `SELECT 
                      a.ARTICLE_TITLE,
                      a.ARTICLE_SUMMARY,
                      a.ARTICLE_IMAGE_URL,
                      c.CATEGORY_NAME,
                      a.ARTICLE_CREDITS,
					            a.PUBLISHED_DATE_TIME,
                      a.ARTICLE_PINNED
                      FROM Articles a
                      INNER JOIN  Categories c ON a.ARTICLE_CATEGORY = c.CATEGORY_ID;`;

    const result = await ExecuteDB(sqlQuery)

    res.status(200).json(result.recordset[0]);

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getHomeData }