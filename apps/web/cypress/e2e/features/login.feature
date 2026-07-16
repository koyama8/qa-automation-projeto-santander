Feature: Login de usuário

  Scenario: Realizar login com sucesso
    Given que possuo credenciais válidas
    When realizo o login na plataforma
    Then devo visualizar o usuário autenticado

