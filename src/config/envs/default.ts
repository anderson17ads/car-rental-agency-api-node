const dbConnection = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.slqyl.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

export const config = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES,
  },
  db: {
    connection: dbConnection,
  },
};
