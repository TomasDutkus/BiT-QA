/// <reference types="cypress" />

it('Request, intercept, visit', () => {

    //API

    //pagal musu duomenis pateiktus, kreipiasi i url, ir grazina informacija is to url
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        // expect(response.status).to.be.eq(200); //ar status kodas 200
    });
 
    //Internetinė svetainė
    //pasakom narsyklei kad ji uzeitu i svetaine
    cy.visit('https://todolist.james.am/#/') // tiesiog uzeinu i svetaine
 
    //perimti
    //sis metodas dazniau naudojamas API, kai API kviecia narsykle!!!

    //pagal musu pateiktus duomenis, kreipiames i url, mes ja perimame ir ja galime sumanipuliuoti
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts/104");  // sita nuoroda grazina 404/ post kurio id=104
    //galime pasidaryti savo response
    //kokiai nors nuorodai(url) suteikiame savo/iskarto numatyta atsakyma - mock arba stub
});

it('Get a post /mock a post', () => {

    //Gauti originalu post, kurio id = 1
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        cy.log(response.body);
    });

    //Sumanipuliuoti, perimti post, kurio id = 1
    //(userId: 104, title: 'perimtas pavadinimas', id:104)
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts/1", {body: {userId: 104, title: 'perimtas pavadinimas', id:104}}).as('getPostMock');
    cy.wait('@getPostMock');
});