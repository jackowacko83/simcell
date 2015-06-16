$(document).ready(function () {
    // some constants
    FIELD_SIZE = 400;
    CHUNK_SIZE = 50;
    CHUNK_AMOUNT = Math.ceil(FIELD_SIZE / CHUNK_SIZE);
    BACTERIUM_AMOUNT = 10;
    MOVE_AMOUNT = 500;
    // field objects
    chunks = [];
    bacteriums = [];
    var chunkAmount = Math.pow(Math.ceil(FIELD_SIZE / CHUNK_SIZE), 2);
    for (var x = 0; x < FIELD_SIZE; x += CHUNK_SIZE) {
        for (var y = 0; y < FIELD_SIZE; y += CHUNK_SIZE) {
            chunks.push(new Chunk(x, y));
        }
    }
    for (var i = 1; i <= BACTERIUM_AMOUNT; i++) {
        var bacterium = new Bacterium($('#gamefield'), i, i * 10 + 5, i * 10 + 5, 5);
        bacterium.draw();
        bacteriums.push(bacterium);
    }
    for (var i = 0; i < MOVE_AMOUNT; i++) {
        setTimeout(function () {
            for (var index in bacteriums) {
                bacteriums[index].move();
            }
        }, 50);
    }
});
