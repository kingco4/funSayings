getQuote();

function getQuote() {
    fetch('https://api.kanye.rest')
        .then((resp) => resp.json())
        .then(function (data) {
        document.getElementById("quote").innerHTML = data.quote;
    });
}


