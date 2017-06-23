var Maze = function(map, exit) {
  this._miner = {
    row: 0,
    col: 0,
    dir: 0 // 0:up, 1:right, 2: down, 3:left
  };
  this._maze = map;
  this._exit = {
    row: exit.row,
    col: exit.col
  };
};

Maze.prototype.turnLeft      = function(){
  this._miner.dir--;
  if (this._miner.dir<0) {

this._miner.dir=3;
  }
};

Maze.prototype.turnRight     = function(){
  this._miner.dir++;

  if (this._miner.dir==4) {

this._miner.dir=0;
  }

};

Maze.prototype.isPathForward = function(){
  if (this._miner.row-this._miner.col==-2) {
    return true;

  }
  else {
    return false;
  }
  if (this._miner.col-this._miner.row==2) {
      return true;

  }
  else {
    return false;
  }


};

Maze.prototype.isPathLeft    = function(){
  if (this._miner.dir == 3) {
  return true;
  }
  return false;
};

Maze.prototype.isPathRight   = function(){
};

Maze.prototype.moveForward   = function(){
};

Maze.prototype.notDone       = function(){
};

module.exports = Maze;
