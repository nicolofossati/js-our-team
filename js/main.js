/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

const team = [
    {
        name : 'Wayne Barnett',
        position : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name : 'Angela Caroll',
        position : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },

    {
        name : 'Walter Gordon',
        position : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },

    {
        name : 'Angela Lopez',
        position : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },

    {
        name : 'Scott Estrada',
        position : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },

    {
        name : 'Barbara Ramos',
        position : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    }
];


const divDom = document.querySelector('#container');

for(let i=0; i<team.length; i++){
    const employees = team[i];
    
    const cardDom = document.createElement('div');
    cardDom.setAttribute('id', 'card');
    divDom.appendChild(cardDom);


    for(let key in employees){
        console.log(employees[key]);
        
        if(key === "name"){
            const h2Dom = document.createElement('h2');
            cardDom.setAttribute('id', 'name');
            h2Dom.innerHTML = employees[key];
            cardDom.appendChild(h2Dom);
        } else if(key === "position"){
            const h3Dom = document.createElement('h2');
            cardDom.setAttribute('id', 'position');
            h3Dom.innerHTML = employees[key];
            cardDom.appendChild(h3Dom);
        } else if(key === "photo"){
            const imgDom = document.createElement('img');
            cardDom.setAttribute('id', 'photo');
            imgDom.src = `img/${employees[key]}`;
            cardDom.appendChild(imgDom);
        } 
    }
}
/*
    <div id="container">
        <div id="card">
            <h2 id="name">Wayne Barnett</h2>
            <h3 id="position">Founder & CEO</h3>
            <img id="photo" src="img/wayne-barnett-founder-ceo.jpg">
        </div>
    </div>
*/