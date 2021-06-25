  
// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
// Try To Attempt : Difficult Level Increased 

//METHOD - 1 (using simple Function)
function Cylinder(cyl_height, cyl_radius) {
    return cyl_height * Math.PI * cyl_radius * cyl_radius;
}

var cyl = Cylinder(7, 2);
console.log(cyl.toFixed(4));


//METHOD - 2 (using prototype)

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }
  
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));
