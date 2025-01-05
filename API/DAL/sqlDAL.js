const sql = require("mssql");

const config = {
  user: 'sathis',  // Correct SQL Server username
  password: 'HyperFreak',   // Correct SQL Server password
  server: 'localhost\\SQLEXPRESS03', // SQL Server instance (double backslash \\ is needed)
  database: 'NEWSTEST',    // Name of your database
  options: {               // Set to true if you're using Azure or SSL
    trustServerCertificate: true,  // Set to true for local development
  },
};

const db = new sql.ConnectionPool(config);

const ExecuteDB = async (query) => {
  try {
    await db.connect();  // Establish connection pool
    const result = await db.query(query);  // Execute the query
    return result;  // Return the result
  } catch (error) {
    console.error('Error querying the database:', error);
  } finally {
    db.close();  // Ensure the pool is closed after query execution
  }
};

module.exports = { ExecuteDB };
