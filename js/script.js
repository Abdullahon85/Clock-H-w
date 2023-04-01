let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30
        
        secondArrow.style = `transform: rotate(${seconds}deg)`
        minuteArrow.style = `transform: rotate(${minutes}deg)`
        hourArrow.style = `transform: rotate(${hours}deg)`
    
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
        
        setTimeout(() => clock(), 1000)
}

clock()


// Рекурсия это когда функция вызывает саму себя
// setTimeout() - позволяет выполнять действия с задержкой




// let i = 0;

// function rek() {
//     if(i < 100) {
//         console.log(i);
//         i++
//        setTimeout(() => rek(),1000)
//     }
   
// }
// rek()


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        removeActive()
        link.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


//secundomer


let stopClock = document.querySelector('.stopwatch__btn');
let stopSeconds = document.querySelector('.stopwatch__seconds');
let stopMinutes = document.querySelector('.stopwatch__minutes');
let stopHours = document.querySelector('.stopwatch__hours');
let redLine = document.querySelector('.tabsLink__span');

stopClock.addEventListener('click', () =>{
    if(stopClock.innerHTML == 'start'){
        stopClock.innerHTML = 'stop';
        redLine.classList.add('active');
        timer()
    }else if(stopClock.innerHTML == 'stop'){
        stopClock.innerHTML = 'clear';
        redLine.classList.add('active_clear');
    }else{
        stopClock.innerHTML = 'start';
        redLine.classList.remove('active_clear');
        clear()
    }
})


function clear(){
    stopHours.innerHTML = 0;
    stopMinutes.innerHTML = 0;
    stopSeconds.innerHTML = 0;
}



//это я сделал сам...

//а это не сам :(
function timer() {
    stopSeconds.innerHTML++;
    if (stopSeconds.innerHTML == 59) {
        stopMinutes.innerHTML++;
        stopSeconds.innerHTML = 0;
        if (stopMinutes.innerHTML == 59) {
            stopHours.innerHTML++;
            stopMinutes.innerHTML = 0;
        }
    }
    let rek = setTimeout(() => timer(), 1000);
    if (stopClock.innerHTML == 'clear') {
        clearTimeout(rek);
        console.log('stop');
    }
}


