/**
 * 
 * @param {string} formaPagamento
 * @returns {number} 
 */
function calcularDescontoPagamento(formaPagamento) {
    switch (formaPagamento) {
        case 'pix':
            return 0.15;
        case 'boleto':
            return 0.10;
        case 'cartao-vista':
            return 0.05;
        case 'cartao-parcelado':
            return 0;
        default:
            return 0;
    }
}

/**
 @param {string} tipoEntrega 
  @returns {number} 
 */
function calcularValorEntrega(tipoEntrega) {
    switch (tipoEntrega) {
        case 'retirada':
            return 0;
        case 'padrao':
            return 12;
        case 'expressa':
            return 25;
        case 'super-expressa':
            return 45;
        default:
            return 0;
    }
}

/**
 * @param {number} valor 
 * @returns {string} .
 */
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


const formOrcamento = document.getElementById('form-orcamento');

formOrcamento.addEventListener('submit', function (event) {
    event.preventDefault();

    const valorProduto = parseFloat(document.getElementById('valor-produto').value);
    const formaPagamento = document.getElementById('forma-pagamento').value;
    const tipoEntrega = document.getElementById('tipo-entrega').value;

    const taxaDesconto = calcularDescontoPagamento(formaPagamento);
    const valorDesconto = valorProduto * taxaDesconto;
    const valorFrete = calcularValorEntrega(tipoEntrega);
    const valorTotalFinal = (valorProduto - valorDesconto) + valorFrete;


    document.getElementById('res-original').textContent = formatarMoeda(valorProduto);
    document.getElementById('res-desconto').textContent = formatarMoeda(valorDesconto);
    document.getElementById('res-frete').textContent = formatarMoeda(valorFrete);
    document.getElementById('res-total').textContent = formatarMoeda(valorTotalFinal);

    document.getElementById('painel-resultado').classList.remove('hidden');
});