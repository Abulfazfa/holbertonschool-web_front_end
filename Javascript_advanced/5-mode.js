function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    var paragraph = document.createElement('p');
    paragraph.innerText = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    var buttonSpooky = document.createElement('button');
    buttonSpooky.innerText = 'Spooky';
    buttonSpooky.addEventListener('click', spooky);
    document.body.appendChild(buttonSpooky);

    var buttonDarkMode = document.createElement('button');
    buttonDarkMode.innerText = 'Dark mode';
    buttonDarkMode.addEventListener('click', darkMode);
    document.body.appendChild(buttonDarkMode);

    var buttonScreamMode = document.createElement('button');
    buttonScreamMode.innerText = 'Scream mode';
    buttonScreamMode.addEventListener('click', screamMode);
    document.body.appendChild(buttonScreamMode);
}


main();
