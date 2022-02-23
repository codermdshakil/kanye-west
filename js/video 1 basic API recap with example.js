
const loadKayne = () =>{    
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayKayne(data))
}

loadKayne();
const quote = document.getElementById('quote');

const displayKayne = (quotes) =>{

    quote.innerText = `" ${ quotes.quote} "`;
    
}

