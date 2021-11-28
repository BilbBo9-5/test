let btndrpp = document.querySelectorAll('.dropedownList');

function close() {
    for (let i = 0; i < btndrpp.length; i++) {
        if (btndrpp[i].classList.length < 2) {
            btndrpp[i].classList.add('active');
        }
    }
}

/**/
function opensaktion(m) {
    f = 0;
    if (m.parentNode.lastElementChild.classList.length === 1) {
        f = 'reduse';
    }
    close();
    if (m.parentNode.lastElementChild.classList.length === 2) {
        m.parentNode.lastElementChild.classList.remove('active');
    }
    if (f === 'reduse') {
        close();
        f = 0;
    }
}

/**/
let linkcardocument = document.querySelectorAll('.dro_link');
for (let i = 0; i < linkcardocument.length; i++) {
    linkcardocument[i].addEventListener("click", turgetitem);
}

function turgetitem() {
    let textchange = this.parentNode.parentNode.parentNode.parentNode.firstElementChild;
    textchange.innerHTML = this.textContent + '<img src="photo/arrow.svg" alt="arrow" class="arrow_aktion">';
    textchange.style = "border: 1px solid #DF4E3C;"
    close();
}

/**/
let arrparagraph = document.querySelectorAll('.p_dT');

function togledate(noode) {
    noode.parentNode.lastElementChild.classList.toggle('akt');
}

for (let i = 0; i < arrparagraph.length; i++) {
    arrparagraph[i].addEventListener("click", alletitem);
}

function alletitem() {
    alert(this.textContent);
    console.log(this.textContent);
    this.parentNode.classList.toggle('akt');
}

/**/
function open_questions_contant(info) {
    let abut = info.parentNode.lastElementChild;
    abut.classList.toggle('open_dropp');
    info.style = 'z-index:-1; opacity: 0; display:none;';
}

function close_questions_contant(info) {
    let abut = info.parentNode;
    abut.classList.remove('open_dropp');
    info.parentNode.parentNode.firstElementChild.style = 'z-index:1; opacity: 1; display:block;';
}