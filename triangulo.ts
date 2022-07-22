import { Punto } from "./punto";

class Triangulo {
  p1: Punto;
  p2: Punto;
  p3: Punto;

  constructor(p1: Punto, p2: Punto, p3: Punto) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  public calcularLongitudLados(p1:Punto, p2:Punto, p3:Punto) : number[]{
    let lengthLados:number[] = [];

    lengthLados.push(p1.calcularDistancia(p2));
    lengthLados.push(p2.calcularDistancia(p3));
    lengthLados.push(p3.calcularDistancia(p1));

    return lengthLados;
  }
}

export {Triangulo}