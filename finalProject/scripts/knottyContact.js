//save URL
const currentURL = window.location.href;

//split into two halves
const everything = currentURL.split('?');

//save just second half and split into pairs 
let formData = everything[1].split('&');

function show(item) {
    let result = '';
    formData.forEach((element) => {
        if (element.startsWith(item)) {
            result = element.split('=')[1].replace('%40','@');
        }
    })
    return(result);
}

//grab DOM element
const confirmation = document.querySelector('#thanks');

confirmation.innerHTML = 
`<p>Thank you ${show('first')} ${show('last')} for sending a message!</p>
<p>We will pass your message on and contact you either through your email at <a href="${show('email')}">${show('email')}</a> or phone at ${show('phone')}.</p>
<p>You will also be added to our email list, so keep an eye out for Knotty News coming your way!</p>`





