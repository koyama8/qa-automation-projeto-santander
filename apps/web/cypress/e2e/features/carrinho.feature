Feature: Carrinho de compras

  Scenario: Incluir produto no carrinho
    Given que estou autenticado para realizar uma compra
    When localizo o produto "Premium Polo T-Shirts"
    And clico em adicionar o produto ao carrinho
    Then devo visualizar a confirmação de produto adicionado ao carrinho
