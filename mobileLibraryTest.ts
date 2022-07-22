import { Mobile2 } from "./mobile2";
import { MobileLibrary } from "./mobileLibrary";

let nokia3210:Mobile2 = new Mobile2( "Nokia3210", "3210", "Nokia", "128MB", "Negro", false, 0, 50);

let iphone3g: Mobile2 = new Mobile2("Iphone3g", "i3g", "Apple", "16GB", "Blanco", false, 0, 150);
  
let galaxy10: Mobile2 = new Mobile2("Galaxy 10", "GT-I900", "Samsung", "16GB", "Rosa", false, 0, 250);

let galaxyS21: Mobile2 = new Mobile2("GALAXY S21", "Ultra 5G", "Samsung", "512MB", "Rosa", true, 5, 1.200);

let todos: Mobile2[] = [iphone3g, galaxyS21, nokia3210, galaxy10];

let miLibrary = new MobileLibrary("Mis Moviles", "En mi casa", todos);


console.log(miLibrary.getName());
console.log(miLibrary.geLocation());
console.log(miLibrary.getMobiles());
console.log(miLibrary.getTotalPrice());
console.log('------------------------------');
miLibrary.printLibrary();

