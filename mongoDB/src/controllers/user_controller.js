// const soma = (req, res) => {
//     const soma = 100 + 8;

//     res.send({ soma: soma });
// };

// module.exports = { soma };


// user_controller.js

const soma = (req, res) => {
    const resultadoSoma = 100 + 8;
    res.send({ soma: resultadoSoma });
  };
  
  module.exports = { soma };
  