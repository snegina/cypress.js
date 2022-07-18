describe('Тестирование staya', function () {

    it('Авторизация с неверным паролем и поиск совпадения с названием Невозможно войти', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('email');
        cy.get('.auth-form > form > [type="password"]').type('wrong_password');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти')

    })
})
