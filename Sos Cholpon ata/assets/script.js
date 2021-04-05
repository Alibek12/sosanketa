$(document).ready(() => {
    const buttonSubmit = $('#btn');
    let isSaved = null;

    const nastavnik = document.getElementById('nastavnik')
    let targetPerson = null;

    nastavnik.addEventListener('input',() => {
        targetPerson = nastavnik.value;
    })

    buttonSubmit.on('click', () => {
        ;
        let pdf = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a2'
        });
        let section = $('body');
        let page = function () {
            pdf.save('anketa.pdf');
            isSaved = true;
        };
        pdf.addHTML(section, page);
    })

    const waButton = document.getElementById('btnWa');

    waButton.addEventListener('click', function () {
        if (isSaved == true) {
            if(targetPerson == 1){
                location.href = "https://wa.me/996555462846";
            }else if(targetPerson == 2){
                location.href = "https://wa.me/996550121141";    
            }else if(targetPerson == 3){
                location.href = "https://wa.me/996704675603";
            }else if(targetPerson == 4){
                location.href = "https://wa.me/996700028121";
            }else if(targetPerson == 5){
                location.href = "https://wa.me/996701190190";
            }else{
                alert("Выберите наставника");
            }
        } else {
            alert("Анкета не сохранена");
        }
    })

    const ch1 = document.getElementById('1');
    const ch2 = document.getElementById('2');
    const ch3 = document.getElementById('3');

    ch1.oninput = () => {
        ch2.checked = false;
        ch3.checked = false;
    }
    ch2.oninput = () => {
        ch1.checked = false;
        ch3.checked = false;
    }
    ch3.oninput = () => {
        ch2.checked = false;
        ch1.checked = false;
    }
})
