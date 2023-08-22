import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Drizzle + MySQL on Express.');
});

app.listen(port, () => {
  console.log(`Drizzle ORM + MySQL server hosting at: http://localhost:${port}`);
});