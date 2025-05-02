const nomeUsuario = localStorage.getItem('usuarioLogado');
const mensagem = document.getElementById('mensagemBoasVindas');

if (nomeUsuario) {
    mensagem.textContent = `Olá, ${nomeUsuario}! Bem-vindo(a) ao Motonline.`; 
} else {
    mensagem.textContent = 'Usuário não identificado.';
}

document.getElementById('sair').addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
});