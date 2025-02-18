//elementu skaiciavimo susiskaiciuoti kiek mes turim li saraso elementu
 
//Svetaine prisijungimas ir registracija
//1.testuoti pacia registracija. Ar galima uzsiregistruoti?
//2. pati prisijungima. Ar galima prisijungti?
//3. Integracinis testas: Ar uzsiregistravus galima prisijungti?
//4. musu rasomas testas tures buti prisijunges prie svetaines, atsiminti kad jis yra prisijunges
//5. Kaip tas pats funkcionalumas yra atvaizduojamas prisijungusiam ir neprisijungusiam vartotojui
 
//Prisijungimo atsiminimas(sesijos issaugojimas)
//Sesija - serverio atminties vieta, kur svetainė gali išsaugoti informaciją
//Cookie - vieta vartotojo kompiuteryje, kur svetainė gali išsaugoti informaciją
 
//Kokią info saugau sesijoje? jautrūs duomenys - slaptažodis, prisijungimo vardas, prisijungimo tokenas, asmens informacija...
// Kokią info saugau cookie? viską, išskyrus jautrią informaciją
 
//abiem galima nustatyti laiką, kiek jie egzistuoja

//Ar sutinkate su slapukais popup testavimas?
it('Ar svetaine leidzia sukurti sausainiuka?', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.setCookie('test', 'test')
})

//Ar informacija issisaugo po svetaines persikrovimo?
//1. Uzeiti i svetaine
//2. Sukurti informacini sausainiuka (JSON masyvas tekstiniame formate, kazkoks skaicius, tekstas ir t.t)
//3. Sukurti kelis sausainiukus
//3.1 Sausainiuku informacija yra surasome i div arba i ul ir t.t.
//4. Perkrauti svetaine
//5. Patikrinti ar sausainiukai isliko po perkrovimo

it('Ar informacija issisaugo po svetaines persikrovimo?', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.setCookie('test1', 'test1')
    cy.setCookie('test2', 'test2')
    cy.setCookie('test3', 'test3')
    cy.reload()
    //Po reload turime gauti cookie ir patikrinti ar jo vardas egzistuoja
    cy.getCookie('test1').should('exist')
    cy.getCookie('test2').should('exist')
    cy.getCookie('test3').should('exist')
    //patikriname cookie reiksmes
    cy.getCookie('test1').should('have.property', 'value', 'test1')
    cy.getCookie('test2').should('have.property', 'value', 'test2')
    cy.getCookie('test3').should('have.property', 'value', 'test3')

    //galim istrinti rankiniu budu cookies ir patikrinti ar jie nebeegzistuoja
    cy.clearCookies()
    cy.getCookie('test1').should('not.exist')
    cy.getCookie('test2').should('not.exist')
    cy.getCookie('test3').should('not.exist')
})

//ar visi testai po cookie sukurimo mato cookie?
it('Uzeina i svetaine ToDoList', () => {
    cy.visit('https://todolist.james.am/#/')
    cy.getCookie('test1').should('exist')
    cy.getCookie('test2').should('exist')
    cy.getCookie('test3').should('exist')
    //sausainiukas cypress aplinkoje egzistuoja tik tam testui!
})

//Sesija - serverio atminties vieta, kur svetainė gali išsaugoti informaciją
it('Testas su sesija', () => {
    cy.session('sesija', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('input.new-todo').type('Testas{enter}')
        cy.setCookie('test', 'test')
    })
    cy.visit('https://todolist.james.am/#/')
})

it('Testas be sesijos', () => {
        cy.visit('https://todolist.james.am/#/')
        cy.get('input.new-todo').type('Testas{enter}')
})