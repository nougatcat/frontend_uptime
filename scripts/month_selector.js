let monthButton = document.querySelectorAll('#monthButton');
console.log(monthButton);

let eventsList = document.querySelectorAll('.events__blocks__lists-list');
console.log(eventsList);

function hideEvents() {
    for (let i = 0; i<eventsList.length; i++)
    {
        eventsList[i].classList.add('events__blocks__lists-list-hidden');
    }
}

hideEvents();
eventsList[0].classList.remove('events__blocks__lists-list-hidden');

monthButton[0].addEventListener('click',()=>{
    hideEvents();
    eventsList[0].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[1].addEventListener('click',()=>{
    hideEvents();
    eventsList[1].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[2].addEventListener('click',()=>{
    hideEvents();
    eventsList[2].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[3].addEventListener('click',()=>{
    hideEvents();
    eventsList[3].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[4].addEventListener('click',()=>{
    hideEvents();
    eventsList[4].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[5].addEventListener('click',()=>{
    hideEvents();
    eventsList[5].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[6].addEventListener('click',()=>{
    hideEvents();
    eventsList[6].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[7].addEventListener('click',()=>{
    hideEvents();
    eventsList[7].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[8].addEventListener('click',()=>{
    hideEvents();
    eventsList[8].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[9].addEventListener('click',()=>{
    hideEvents();
    eventsList[9].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[10].addEventListener('click',()=>{
    hideEvents();
    eventsList[10].classList.remove('events__blocks__lists-list-hidden');
});
monthButton[11].addEventListener('click',()=>{
    hideEvents();
    eventsList[11].classList.remove('events__blocks__lists-list-hidden');
});