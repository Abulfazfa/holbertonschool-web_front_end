function createElement(data) {
    let paragraph = document.createElement('p');
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText;
            const obj = JSON.parse(response);
            let pages = obj.query.pages;
            let pageId = Object.keys(pages)[0];
            let text = pages[pageId].extract;

            callback(text);
        }
    };

    xhr.open('GET', url);
    xhr.send();
}

queryWikipedia(createElement);
