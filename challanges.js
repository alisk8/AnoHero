let btn = document.querySelector('#but');
let chal = document.querySelector('#chal');


let challanges = ['Ask a stranger how they are doing', 'Make a new friend', 'tell a joke to a store employee the next time you there', 'Complete a workout today', 'Meditate and Listen to Relaxing Music', 'catch up with an old friend', 'Call a loved one'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.getElementById('buts').style.display = 'inline-block';
    document.getElementById('cong').style.display = 'none';
    document.getElementById('congs').style.display = 'none';
    let index = getRandomNumber(0, challanges.length-1);
    chal.innerText = challanges[index];
});

function comp(){
    document.body.style.backgroundColor = '#03fc56';
    document.getElementById('buts').style.display = 'none';
    document.getElementById('cong').style.display = 'block';
    document.getElementById('congs').style.display = 'block';
    document.getElementById('cong').innerHTML= 'Congratulations, Try and do another one or come back tommorow';
    document.getElementById('congs').innerHTML='Hit the "Generate a Challange Button"';
}
