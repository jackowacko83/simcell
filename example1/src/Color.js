function randomHexColor () {
    var letter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * letter.length)];
    }
    return color;
}
