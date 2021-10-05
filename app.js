let btn = document.querySelectorAll('.container-items-div-button'),
    content = document.querySelectorAll('.container-items-div-content'),
    icon = document.querySelectorAll('.container-items-div-button span'),
    contentLength = content.length;

function hide(number) {
    btn[number].classList.toggle('btn-change');

    if (content[number].classList.contains('rise') || content[number].classList.length === 1) {
        content[number].classList.add('drop');
        content[number].classList.remove('rise');
        icon[number].innerHTML = '-';
    } else {
        content[number].classList.remove('drop');
        content[number].classList.add('rise');
        icon[number].innerHTML = '+';
    }

}