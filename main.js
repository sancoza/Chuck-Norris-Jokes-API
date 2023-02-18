const box = document.getElementById('box');
const p = document.createElement('p');

const url = 'https://api.chucknorris.io/jokes/random';

function quote() {
  fetch(url)
  .then(res => {
    return res.json()
  })
  .then(data => {
    p.innerHTML = data.value;
    box.appendChild(p);
  })
}