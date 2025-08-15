import "dotenv/config";

//
import { app } from "./config/setup/appSetup";
import { appConfig } from "./config/appConfig";
import { dataBaseSetup } from "./config/setup/dbSetup";

//
const PORT = appConfig.port;

//
const startServer = async () => {
  // Starting the server
  try {
    app.listen(PORT, () => {
      console.log("App is running on port:", PORT);
    });
  } catch (err) {
    console.log("Error starting the server:", err);
  }
};

//
const databaseConnection = async () => {
  try {
    dataBaseSetup.authenticate();
  } catch (error) {
    console.log("Error establishing connection to db", error);
  }
};

//
startServer();
databaseConnection();
