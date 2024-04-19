async function pesquisar(event) {
    event.preventDefault()
    let cep = document.querySelector('#cep').value
    if (cep == '') {
        window.alert("Digite o CEP.")
        return
    }
    cep = cep.replace('.','').replace('-', '')
    let r = await consultarCep(cep)
    let carregar = document.querySelector('#carregando')
    carregar.style.visibility = 'visible'
    document.querySelector('#rua').value = r.logradouro
    document.querySelector('#bairro').value = r.bairro
    document.querySelector('#estado').value = r.uf
    carregar.style.visibility = 'hidden'
}
async function consultarCep(cep) {
    //viacep.com.br/ws/01001000/json/
    let link = `https://viacep.com.br/ws/${cep}/json/`
    let resposta = await fetch(link)
    console.log(resposta)
    let dados = resposta.json()
    console.log(dados)
    return dados
}