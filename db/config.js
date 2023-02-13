const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.BD_CNN, {
          //apartir del mogose v6  ya se usa por defecto
          /* useNewUrlParser: true,
          useUnifiedTopology: true, */
          /* useCreateIndex: true */
          /*   useFindAndModify:false */
      });
    console.log("base datoos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializad DB");
  }
};

module.exports = {
  dbConnection
};
