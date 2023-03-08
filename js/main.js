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


DATA:
Wayne Barnett	    Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	    Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	    Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	    Developer	            scott-estrada-developer.jpg
Barbara Ramos	    Graphic Designer	    barbara-ramos-graphic-designer.jpg
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


const divDom = document.querySelector("#data_container");

for(let i=0; i<team.length; i++){
    const employees = team[i];
    
    for(let key in employees){
        console.log(employees[key]);
        
        if(key == "photo"){
            const imgDom = document.createElement('img');
            imgDom.src = `img/${employees[key]}`;
            divDom.appendChild(imgDom);
        } else {
            const pDom = document.createElement('p');
            pDom.innerHTML = employees[key];
            divDom.appendChild(pDom);
        }
    }


}




function print_arrayObject(array){
    for(let key in array){
        console.log(array[key]);
    }
    
}