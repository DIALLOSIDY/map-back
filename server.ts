import {createApp} from './app.js';
import { sequelize } from './src/config/config';

const PORT = process.env.PORT || 3000;

const init = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const app = createApp();

  
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

init();
