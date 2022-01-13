let elopenmodalbtn = document.getElementById('btn-modal-connect');
let elclosemodalbtn = document.getElementById('btn-close-modal');
let elmodalwindow=document.getElementById('box-modal');

elopenmodalbtn.addEventListener('click', function(){
    console.log('one');
    elmodalwindow.classList.add('show');
});

elclosemodalbtn.addEventListener('click', function (){
    elmodalwindow.classList.remove('show');
});