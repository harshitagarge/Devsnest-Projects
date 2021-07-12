const btn = document.getElementById('btn');
const author = document.querySelector('h2');
btn.addEventListener('click', getMeme);

function getMeme() {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'https://meme-api.herokuapp.com/gimme');

    xhr.onload = () => {
        if(xhr.status == 200) {
            let response = JSON.parse(xhr.responseText).preview;
            author.innerText = `Author: ${JSON.parse(xhr.responseText).author}`;
            if(response.length >= 4)
                document.querySelector('img').src = response[3];
            else
                document.querySelector('img').src = response[response.length-1];
        }
    }
    xhr.send();
}















// document.querySelector('#btn').addEventListener('click', getMeme);

// function getMeme() {

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','https://meme-api.herokuapp.com/gimme');
    
//     xhr.onload = function () {
//         if(this.status==200) {
//             let response = JSON.parse(xhr.responseText).preview;
//             let title = JSON.parse(xhr.responseText).title;
//             document.querySelector('img').src = response[2];
//             document.querySelector('h3').innerText = title;
//         }
//     }
//     xhr.send();
// }
