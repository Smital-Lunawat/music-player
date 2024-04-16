const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

// Uncaught Exception
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message, err);
  console.log('💥 UNHANDLED EXCEPTION! Shutting down...');

  process.exit(1);
});

const app = require('./app');

<<<<<<< HEAD
<<<<<<< HEAD
const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);
=======
const DB = process.env.DATABASE;
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
=======
const DB = process.env.DATABASE;
>>>>>>> 3ecb8773ae3da311b4c4ebbe51aa69155fa49a49
mongoose.connect(DB).then(() => {
  console.log('🐟 DATABASE CONNECTION SUCCESSFUL');
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`🐟 LISTENING ON PORT ${process.env.PORT || 8080}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('💥 UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
