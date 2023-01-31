///<reference types="cypress" />

/*
docTeste({
    rotina           : simulação de crédito;
    objetivoTeste    : validar utilização do slider 'De quanto você precisa' em conjunto com o slider 'Em quantos meses quer pagar?', 
                       confirmando a apresentação dos valores de 'Parcela mensagem aproximada' conforme interação dos dois sliders;
    preRequisitos    : não se aplica;
    cenariosTeste    : C01 - Dado que preciso de R$1.000 | Quando solicito 06 parcelas para pagamento | Então o valor da parcela a ser paga será de R$271,27;
                       C02 - Dado que preciso de R$4.000 | Quando solicito 12 parcelas para pagamento | Então o valor da parcela a ser paga será de R$478,49;
                       C03 - Dado que preciso de R$8.000 | Quando solicito 24 parcelas para pagamento | Então o valor da parcela a ser paga será de R$347,89;
    resultadoEsperado: ao modificar os sliders o valor da parcela deverá ser coerente as dados de entrada 'De quanto você precisa' e 'Em quantos meses quer pagar?';
})*/

describe('Simulação de crédito - eCred', () => {

    beforeEach(() => {
        cy.visit('https://www.serasa.com.br/ecred/simulador/');
    }); 

    it('Crédito de R$1.000 em 6 parcelas', () => {
    });

    it('Crédito de R$4.000 em 12 parcelas', () => {
    });

    it('Crédito de R$6.000 em  24 parcelas', () => {
    });
});