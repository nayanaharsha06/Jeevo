const { Client } = require("pg");

exports.handler = async () => {

  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  await client.connect();

  const result = await client.query("SELECT * FROM users");

  await client.end();

  return {
    statusCode: 200,
    body: JSON.stringify(result.rows)
  };
};