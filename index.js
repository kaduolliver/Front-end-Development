// Referência ao Firestore
const db = firebase.firestore();
const pessoasCollection = db.collection('pessoas');

document.getElementById('cadastroForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  
  // Adicionar documento
  pessoasCollection.add({
    nome: nome,
    email: email,
    telefone: telefone,
    dataCadastro: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    document.getElementById('mensagem').innerHTML = 'Pessoa cadastrada com sucesso!';
    document.getElementById('cadastroForm').reset();
  })
  .catch((error) => {
    document.getElementById('mensagem').innerHTML = 'Erro ao cadastrar: ' + error.message;
  });
});

