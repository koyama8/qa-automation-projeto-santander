Feature: Validação do produto no checkout

  Scenario: Validar produto incluído no carrinho na tela de pagamento
    Given que possuo o produto "Premium Polo T-Shirts" no carrinho
    When avanço para o checkout
    And valido o produto "Premium Polo T-Shirts" no resumo do pedido e prossigo para o pagamento
    Then devo visualizar a tela de pagamento
