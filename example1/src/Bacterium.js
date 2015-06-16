function Bacterium (target, id, x, y, radius) {
    this.target = target;
    this.id = id;
    this.direction = randomDirection();
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = randomHexColor();
    this.chunks = [];
}

Bacterium.prototype.move = function (direction) {
    if (direction === undefined) {
        direction = randomDirection();
        if (undefined !== this.direction && 0.6 > Math.random()) {
            direction = this.direction;
        }
    }
    this.direction = direction;
    this.x += direction.x * 5;
    this.y += direction.y * 5;
    if (this.x < 10) {
        this.x = 10;
    }
    if (this.y < 10) {
        this.y = 10;
    }
    if (this.x > 390) {
        this.x = 390;
    }
    if (this.y > 390) {
        this.y = 390;
    }
    this.draw();
};

Bacterium.prototype.draw = function () {
    var element = this.target.find('div.bacterium[data-id=' + this.id + ']');
    if (0 == element.length) {
        element = $('<div></div>');
        element.attr('data-id', this.id);
        element.addClass('bacterium');
        this.target.append(element);
    }
    element.attr('data-x', this.x);
    element.attr('data-y', this.y);
    element.css('left', this.x);
    element.css('top', this.y);
    element.css('height', 2 * this.radius + 'px');
    element.css('width', 2 * this.radius + 'px');
    element.css('border-radius', this.radius + 'px');
    element.css('background-color', this.color);
};

Bacterium.prototype.collidesWith = function (otherBacterium) {
    var xDistance = Math.abs(this.x - otherBacterium.x);
    var yDistance = Math.abs(this.y - otherBacterium.y);
    var distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    return (this.radius + otherBacterium.radius) > distance;
};

Bacterium.prototype.calculateChunks = function () {
    this.chunks = [
        getChunk(this.x - this.radius, this.y),
        getChunk(this.x + this.radius, this.y),
        getChunk(this.x, this.y - this.radius),
        getChunk(this.x, this.y + this.radius)
    ];
};
