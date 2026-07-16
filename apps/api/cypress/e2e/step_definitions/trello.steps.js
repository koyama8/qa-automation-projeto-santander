const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor')

let endpoint
let resposta

Given('que possuo o endpoint de uma ação do Trello',() => {
   endpoint = '/1/actions/592f11060f95a3d3d46a987a'
})

When('envio uma requisição GET para consultar a ação', () => {
   cy.api({
    method:'GET',
    url:endpoint
   }).then((response) => {
    resposta = response
   })
})

Then('devo receber o status code 200 e o nome da lista "Professional"',() => {
   expect(resposta.status).to.eq(200)
   expect(resposta.body.data.list.name).to.eq('Professional')
   expect(resposta.body.data.list).to.have.property('id')

   expect(resposta.body.data.list.id).to.be.a('string').and.not.be.empty
})