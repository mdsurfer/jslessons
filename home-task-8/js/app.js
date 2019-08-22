window.addEventListener('DOMContentLoaded', function() {

    'use sctrict';
    console.log('start');
    var tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        var target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for( var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});


// Timer

var deadline = '2019-07-07';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000)%60),
        minutes = Math.floor((t/1000/60)%60),
        hours = Math.floor((t/(1000*60*60)));
        
    if ( t <= 0 ) {
        return {
            'total' : t,
            'hours' : '00',
            'minutes' : '00',
            'seconds' : '00'
        };
    }
    else { 
        return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
    }
}

function drawTimer(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
        timeInterval = setInterval(updateTime, 1000);
    
    function updateTime() {
        var t = getTimeRemaining(endtime); 

        if (t.hours < 10) {
            hours.textContent =  '0' + t.hours;
        } else {
            hours.textContent = t.hours;
        }
        if (t.hours < 10) {
            minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

        if (t.seconds < 10) {
                seconds.textContent =  '0' + t.seconds;

            } else {
                seconds.textContent = t.seconds;
            }
    }
}

drawTimer('timer', deadline);

let tabBtns = document.querySelectorAll('.description-btn'),
    moreBtn = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');
   
function openModalPopup(tab) {
        overlay.style.display = 'block';
        //this.classList.add('more-splash');
}


    close.addEventListener("click", function() {
        overlay.style.display = 'none';
    });
//}

tabBtns.forEach(function(btn, i) {
    btn.addEventListener("click", function() {
        openModalPopup(tabBtns);
    });
});



