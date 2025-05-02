// Alterna entre login e cadastro
document.getElementById('go-to-signup')?.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('signupSection').classList.remove('hidden');
});

document.getElementById('go-to-login')?.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('signupSection').classList.add('hidden');
    document.getElementById('loginSection').classList.remove('hidden');
});

// Validação de login
document.getElementById('loginForm').addEventListener('submit', function(e){
    e.preventDefault();
    const usuario = document.getElementById('usuario').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const mensagem = document.getElementById('mensagem');

    if (usuario === '' || senha === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = 'var(--danger)';
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
    if (usuarios[usuario] && usuarios[usuario] === senha) {
        mensagem.textContent = 'Login bem-sucedido!';
        mensagem.style.color = 'lime';
    } else {
        mensagem.textContent = 'Usuário ou senha incorretos';
        mensagem.style.color = 'var(--danger)';
    }
});

// Cadastro de novo usuário
document.getElementById('cadastroForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    const novoUsuario = document.getElementById('novoUsuario').value.trim();
    const novaSenha = document.getElementById('novaSenha').value;

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};
    
    if (usuarios[novoUsuario]) {
        document.getElementById('mensagemCadastro').textContent = 'Usuário já existente!';
        document.getElementById('mensagemCadastro').style.color = 'red';
    } else {
        usuarios[novoUsuario] = novaSenha;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        document.getElementById('mensagemCadastro').textContent = 'Cadastro realizado com sucesso!';
        document.getElementById('mensagemCadastro').style.color = 'green';

        document.getElementById('cadastroForm').reset();
    }
});

// Esqueceu a senha?
document.getElementById('forgot')?.addEventListener('click', function(e){
    e.preventDefault();
    const usuario = prompt('Digite seu nome de usuário: ');
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || {};

    if (usuarios[usuario]) {
        document.getElementById('forgotSenha').textContent = `Sua senha é ${usuarios[usuario]}`;
        document.getElementById('forgotSenha').style.color = 'red';
    } else {
        document.getElementById('forgotSenha').textContent = 'Usuário não encontrado.';
        document.getElementById('forgotSenha').style.color = 'blue';
    }
});
