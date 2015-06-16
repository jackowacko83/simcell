DIRECTIONS = {
    UP: {
        x: 0,
        y: -1
    },
    DOWN: {
        x: 0,
        y: 1
    },
    LEFT: {
        x: -1,
        y: 0
    },
    RIGHT: {
        x: 1,
        y: 0
    }
};

function randomDirection () {
    var keys = Object.keys(DIRECTIONS);
    return DIRECTIONS[keys[Math.floor(Math.random() * keys.length)]];
}
