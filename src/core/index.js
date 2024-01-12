'use strict';

const urlParams = new URLSearchParams(window.location.search);
const text = urlParams.get('text');

document.title = 'show-text'
document.querySelector("h1#first-text").innerHTML = text ?? 'no-text';

