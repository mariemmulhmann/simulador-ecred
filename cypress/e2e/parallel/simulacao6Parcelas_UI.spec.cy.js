///<reference types="cypress" />
const dadosSimuladorEcred = require ('../../fixtures/simuladorEcred.json');
const simuladorEcredPage  = require ('../../support/pageObjects/simuladorEcred.page');

/*
docTeste({
    rotina           : simulação de crédito;
    objetivoTeste    : validar utilização do slider 'De quanto você precisa' em conjunto com o slider 'Em quantos meses quer pagar?', 
                       confirmando a apresentação dos valores de 'Parcela mensagem aproximada' conforme interação dos dois sliders;
    preRequisitos    : não se aplica;
    cenariosTeste    : C01 - Dado que preciso de R$1.000 | Quando solicito 06 parcelas para pagamento | Então o valor da parcela a ser paga será de R$271,27;
    resultadoEsperado: ao modificar os sliders o valor da parcela deverá ser coerente as dados de entrada 'De quanto você precisa' e 'Em quantos meses quer pagar?';
})*/

describe('Simulação de crédito - eCred', () => {

    beforeEach(() => {
        cy.visit('https://www.serasa.com.br/ecred/simulador/');
    }); 

    it('Crédito de R$1.000 em 6 parcelas', () => {
        simuladorEcredPage.fillForm(dadosSimuladorEcred.simulacaoEcred_E2E.C01);
    });
});