async function buscarEndereco () {
    const cep = document.getElementById('cep').value;
    const api = `https://viacep.com.br/ws/${cep}/json/`;
    const enderecoDiv = document.getElementById('endereco');
    const mensagemErro = document.getElementById('erro');
    mensagemErro.style.display = 'none';
    mensagemErro.innerHTML = '';
    enderecoDiv.style.display = 'none';
    enderecoDiv.innerHTML = '';

    if (!cep) {
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = '<p>Por favor, digite um CEP.</p>';
        return;
    }

    try{
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error('Erro ao buscar o CEP');
        }

        const data = await response.json();
        if (!data.erro) {
            enderecoDiv.style.display = 'block';
            enderecoDiv.innerHTML = `
                <h2>Endereço</h2>
                <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        } else {
            mensagemErro.style.display = 'block';
            mensagemErro.innerHTML = '<p>CEP não encontrado</p>';
        }
    }catch (error) {
        console.error('Erro:', error);
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = '<p>erro ao buscar CEP. Tente novamente.</p>';
    }
   
}

