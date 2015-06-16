function Chunk (x, y) {
    this.x = x;
    this.y = y;
}

function getChunk (x, y) {
    var chunkX = Math.floor(x / CHUNK_SIZE);
    var chunkY = Math.floor(y / CHUNK_SIZE);
    return chunks[chunkX + CHUNK_AMOUNT * chunkY];
}

function getChunks (x, y, radius) {
    var chunkTop = getChunk(x, y - radius);
    var chunkRight = getChunk(x + radius, y);
    var chunkDown = getChunk(x, y + radius);
    var chunkLeft = getChunk(x - radius, y);
    return [chunkTop, chunkRight, chunkDown, chunkLeft];
}
