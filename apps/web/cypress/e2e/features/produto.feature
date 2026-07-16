Feature: Busca de produtos

  Scenario: Buscar um produto existente
    Given que estou autenticado na plataforma
    When acesso a página de produtos
    And busco pelo produto "Polo"
    Then devo visualizar o produto nos resultados