
const isTimeOut = 10000
function elementSimuladorEcred() {
    return {
        body                  : function() { return cy.get('[onload="dispatchPageView()"]',                  { timeout: isTimeOut })},         
        firstTitleContainer   : function() { return cy.get('[class="ecs_container"]',                        { timeout: isTimeOut })},
        topTile               : function() { return cy.get('[class="top-title"]',                            { timeout: isTimeOut })},
        topsubtile            : function() { return cy.get('[class="top-subtitle"]',                         { timeout: isTimeOut })},
        firstPostCaption      : function() { return cy.get('[class="post-subtitle first"]',                  { timeout: isTimeOut })},
        howMuchTile           : function() { return cy.get('[class="mt-0"]',                                 { timeout: isTimeOut })},
        amountTitle           : function() { return cy.get('#amount',                                        { timeout: isTimeOut })},
        howMuchSlider         : function() { return cy.get('#slider-range',                                  { timeout: isTimeOut })},
        minimumAmountTile     : function() { return cy.get('#value-range > span:nth-child(1)',               { timeout: isTimeOut })},
        maximumAmountTile     : function() { return cy.get('#value-range > span:nth-child(2)',               { timeout: isTimeOut })},
        howManyMonthsSlider   : function() { return cy.get('#slider-range-month',                            { timeout: isTimeOut })},
        monthsTitle           : function() { return cy.get('#month-amount',                                  { timeout: isTimeOut })},
        minimumMonthsTile     : function() { return cy.get('#value-range > span:nth-child(1)',               { timeout: isTimeOut })},
        maximumMonthsTile     : function() { return cy.get('#value-range > span:nth-child(2)',               { timeout: isTimeOut })},
        answerOutputContainer : function() { return cy.get('#answer-output',                                 { timeout: isTimeOut })},
        monthAmountOutputText : function() { return cy.get('#month-amount-output',                           { timeout: isTimeOut })},
        installmentValueText  : function() { return cy.get('#price-number',                                  { timeout: isTimeOut })},
        simulatorResultText   : function() { return cy.get('[class="simulator-result-disclamer"]',           { timeout: isTimeOut })},
        searchOffers          : function() { return cy.get('[data-gtm-name="buscar-ofertas-de-emprestimo"]', { timeout: isTimeOut })}
    }
}

function infoSimulador() {
    const element = elementSimuladorEcred()
    return {
        open: function(){
            cy.visit('https://www.serasa.com.br/ecred/simulador/');
        },

        setHowMuch: function(howMuch){
            element.howMuchSlider().invoke("val", howMuch.amountSlider).should('have.value', howMuch.amountSlider).trigger("input");   
            element.amountTitle().should("have.text", howMuch.amountText);
        },

        setHowMany: function(howMany){
            element.howManyMonthsSlider().invoke("attr", 'step', 0).trigger("change"); 
            element.howManyMonthsSlider().invoke("val", howMany.mouthsSlider).trigger("input"); 
            element.monthsTitle().should("have.text", howMany.mouthsText+" meses");
           
        },

        getSimulatorResult: function(simulatorResults) {
            element.monthAmountOutputText().should("have.text", simulatorResults.mouthsText+"x");
            element.installmentValueText().should("have.text", simulatorResults.installmentValue);
        },

        setSearchOffers: function() {
            element.searchOffers().click();
            cy.url().should('contain', 'https://www.serasa.com.br/entrar');
        }
    }
}

function simuladorEcred_E2E() {
    const simuladorE2E = infoSimulador()
    return {
        fillForm: function(dataSimuladorE2E) {
            simuladorE2E.setHowMuch(dataSimuladorE2E);
            simuladorE2E.setHowMany(dataSimuladorE2E);
            simuladorE2E.getSimulatorResult(dataSimuladorE2E);
            simuladorE2E.setSearchOffers();
        }
    }
}

module.exports = simuladorEcred_E2E()