const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor')

let endpoint
let resposta

Given('que possuo o endpoint de uma ação do Trello', () => {
  endpoint = '/1/actions/592f11060f95a3d3d46a987a'
})

When('envio uma requisição GET para consultar a ação', () => {
  return cy
    .api({
      method: 'GET',
      url: endpoint,
    })
    .then((response) => {
      resposta = response
    })
})

Then(
  'devo receber o status code 200 e o nome da lista {string}',
  (nomeEsperado) => {
    expect(resposta.status).to.eq(200)
    expect(resposta.headers['content-type']).to.include('application/json')

    expect(resposta.body).to.be.an('object')
    expect(resposta.body.data).to.be.an('object')
    expect(resposta.body.data.list).to.be.an('object')
    expect(resposta.body.data.list).to.have.all.keys('name', 'id')

    expect(resposta.body.data.list.name).to.eq(nomeEsperado)
    expect(resposta.body.data.list.id).to.be.a('string').and.not.be.empty
  }
)
