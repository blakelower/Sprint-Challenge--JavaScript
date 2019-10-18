class maker{
    constructor (attributes){
    this.len = attributes.len;
    this.wid= attributes.wid;
    this.hei = attributes.hei;
    }
    volume() {
        return this.len * this.wid * this.hei;
      }
  
      surface() {
        return 2 * (this.len * this.wid + this.len * this.hei + this.wid * this.hei);
      }
    }
const Cube = new maker({
    "len": 4,
    "wid": 5,
    "hei": 5,
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Cube.volume()); // 100
console.log(Cube.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.