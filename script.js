
const team = [
    {
       name: 'Wayne',
       last_name: 'Barnett',
       role: 'Founder &amp; CEO',
       image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela',
        last_name: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter',
        last_name: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela',
        last_name: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott',
        last_name: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'

    },

    {
        name: 'Barbara',
        last_name: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]
console.log(team);

const container = document.querySelector('.container');

function createAllCards(){
    const row = document.createElement('div');
    row.className = 'row';
    for(let i = 0; i < team.length; i++){
        console.log(team[i]);
        const member = team[i];
        const template = printOneCard(member);
        row.innerHTML += template;   
    }    
}
createAllCards();

function printOneCard(member){
        const infoDiv = document.createElement('div');
        container.append(infoDiv);
        infoDiv.innerHTML = "<div class='text-style'>" +  
        member.name + " " + member.last_name + "<br>" + "<em>" + member.role +"</em>" + "</div>" + "<br>" + "<img class='img-properties' src=./img/" + member.image + ">"

        return infoDiv;
}

const addBtn = document.getElementById('add-btn');
const submitBtn = document.getElementById('submit');


