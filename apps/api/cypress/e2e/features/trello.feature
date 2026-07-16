Feature: Consulta de ação no Trello

  Scenario: Consultar o nome da lista de uma ação
    Given que possuo o endpoint de uma ação do Trello
    When envio uma requisição GET para consultar a ação
    Then devo receber o status code 200 e o nome da lista "Professional"
