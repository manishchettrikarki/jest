export const dbConfig = {
  dbUser: process.env.DB_USER ?? "gange",
  dbHost: process.env.DB_HOST ?? "localhost",
  dbPassword: process.env.DB_PASSWORD ?? "gange",
  dbName: process.env.DB_DATABASE ?? "jest",
};
