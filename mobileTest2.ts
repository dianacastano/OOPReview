import { Mobile2 } from "./mobile2";

let nokia3210:Mobile2 = new Mobile2( "Nokia3210", "3210", "Nokia", "128MB", "Negro", false, 0, 50);

let iphone3g: Mobile2 = new Mobile2("Iphone3g", "i3g", "Apple", "16GB", "Blanco", false, 0, 150);
  
let galaxy10: Mobile2 = new Mobile2("Galaxy 10", "GT-I900", "Samsung", "16GB", "Rosa", false, 0, 250);
    
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
    
nokia3210.is5G = true; // muestra un error porque se le han cambiado los atributos
nokia3210.cameraNumber = 4;  // para poderlo hacer deberiamos llamar un metodo setter y getter
  
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);

let arr:Mobile2[] = [nokia3210, iphone3g, galaxy10];

for(let i = 0; i < arr.length; i++){
  arr[i].print();
}