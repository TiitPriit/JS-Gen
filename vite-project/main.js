import './style.css';
import axios from "axios";

const url = "https://dog.ceo/api/breeds/image/random";

const getDog = () => {
    axios.get(url)
        .then(response => {
            let image = response.data.message;
            document.getElementById("image").src = image;
        })
        .catch(error => {
            console.error("Viga päringu tegemisel:", error);
        });
}

document.querySelector('#app').innerHTML = `
<h1>Gen pani mulle MA seda isegi ei teinud, ma ei tea, miks ma pean sellele tähelepanu pöörama, aga siin on koerapilt:</h1>

<h2>Siin on mingi suvaline krants</h2>

<button onclick="getDog()">Click-me</button>
<br>
<br>

<img id="image" src="" alt="Dog" width="350px" height="350px" />    
`;


window.getDog = getDog;

