const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors'); // Adicione esta linha


dotenv.config();

const token = process.env.API_TOKEN

const app = express();
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(cors()); // Adicione esta linha para habilitar o CORS
app.use(express.json());

app.post('/consulta-veiculo', async (req, res) => {
  const { placa } = req.body;

  try {
    const response = await axios.post(
      `https://hmlapi.splitrisk.com.br/`,{
        method:'POST', 
        headers:{
            'Authorization': 'API_TOKEN'
        }
      }
    );

    // Verifica se a resposta possui um cabeçalho 'Content-Type' indicando JSON
    const contentType = response.headers['content-type'];
    if (contentType && contentType.includes('application/json')) {
      console.log('Resposta da API externa:', response.data);
      res.json(response.data);
    } else {
      // Se não for JSON, trata como um erro
      console.error('Erro na requisição: Resposta não é um JSON válido');
      res.status(500).json({ error: 'Erro na requisição para consulta de veículo' });
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    res.status(500).json({ error: 'Erro na requisição para consulta de veículo' });
  }
});