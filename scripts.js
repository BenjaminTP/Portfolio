document.addEventListener("DOMContentLoaded", function(){
    let count = 0;
    let button = document.querySelector('#button1');
    button.addEventListener('click', function() {
        if (count % 2 != 0) {
            button.style.backgroundColor = '';
        } else {
            button.style.backgroundColor = 'green';
        }
        count++;
    });
    button.addEventListener('mouseover', function() {
        if (count % 2 === 0) {
            document.querySelector('#feedback1').innerHTML = 'PRESS IT';
        }
    });
    button.addEventListener('mouseout', function() {
        document.querySelector('#feedback1').innerHTML = '';
    });
});

