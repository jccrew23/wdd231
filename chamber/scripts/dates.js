//current year
document.querySelector('#currentyear').innerHTML = `©${new Date().getFullYear()}`;

//last modified
document.querySelector('#lastModified').innerHTML = new Date(document.lastModified);