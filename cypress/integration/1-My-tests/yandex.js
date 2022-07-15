describe('Тестирование yandex.ru', function () {

    it('Проверка, что при поиске котята в выдаче есть Картинки по запросу котята', function () {
        cy.visit('https://yandex.ru');
        cy.get('#text').type('котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «котята»')
    })
})