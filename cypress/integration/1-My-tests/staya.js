
describe('Тестирование staya', function () {

    it('Авторизовываюсь и ищу совпадение с названием Мои заказы', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('email');
        cy.get('.auth-form > form > [type="password"]').type('password');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')

    })
})
