const api = "https://randomuser.me/api/?results=20";

async function buscarUsers() {
    const pais = document.getElementById('nacionalidade').value.trim().toLowerCase(); 
    const mensagemErro = document.getElementById('erro');
    mensagemErro.style.display = 'none';
    mensagemErro.innerHTML = '';

    if (!pais) {
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = '<p>Por favor, digite um país.</p>';
        return;
    }

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Erro ao carregar os usuários');
        }
        const data = await response.json();
        let users = data.results;

        
        if (pais) {
            users = users.filter(user => user.location.country.toLowerCase() === pais);
        }

        let cards = '';
        if (users.length > 0) {
            users.forEach(user => {
                cards += `
                    <div class="card">
                        <img src="${user.picture.large}" alt="Foto de ${user.name.first}">
                        <div class="card-details">
                            <p><strong>Nome:</strong> ${user.name.first} ${user.name.last}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Telefone:</strong> ${user.phone}</p>
                            <p><strong>País:</strong> ${user.location.country}</p>
                        </div>
                    </div>
                `;
            });
        } else {
            mensagemErro.style.display = 'block';
            mensagemErro.innerHTML = '<p>Nenhum usuário encontrado para o país especificado.</p>';
        }

        let cardContainer = document.getElementById("user-card");
        if (cardContainer) {
            cardContainer.innerHTML = cards;
        } else {
            mensagemErro.style.display = 'block';
            mensagemErro.innerHTML = '<p>Elemento "user-card" não encontrado.</p>';
        }
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = '<p>Erro ao buscar usuários. Tente novamente mais tarde.</p>';
    }
}
