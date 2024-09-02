const http = require('http');

const usuario = {
  "nome": "Felipe Nogueira Ramon",
  "idade": 19,
  "descrição": "Sou uma pessoa extrovertida, gosto de tocar instrumentos, cozinhar e sorrir.",
  "gênero": "Masculino",
  "país": "Brasil"
};


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/json'  });
  res.end(JSON.stringify(usuario)
);
});

// Fazendo o servidor ouvir na porta 3000
server.listen(3000, () => {
  console.log('Servidor rodando em <http://localhost:3000/>');
});
