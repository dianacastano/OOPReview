class Punto {
    private x: number;
    private y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    public toString(): string {
        return "(${this.x},${this.y})";
    }

    public getX(): number {
        return this.x;
    }

    public setX(value: number) {
        this.x = value;
    }
    
    public getY(): number {
        return this.y;
    }

    public setY(value: number) {
        this.y = value;
    }

    public distanciaAlOrigen(): number {
        return Number(Math.sqrt(this.x ** 2 + this.y ** 2).toFixed());
    }

    public calcularDistancia(otroPunto: Punto): number {
        let dist: number = Number(
          Math.sqrt(
            (this.x - otroPunto.x) ** 2 + (this.y - otroPunto.y) ** 2
          ).toFixed()
        );
        return dist;
    }

    public calcularCuadrante(): number {
        let cuadrante = -1;
    
        if (this.x > 0 && this.y > 0) {
          cuadrante = 1;
        } else if (this.x < 0 && this.y > 0) {
          cuadrante = 2;
        } else if (this.x < 0 && this.y < 0) {
          cuadrante = 3;
        } else if (this.x > 0 && this.y < 0) {
          cuadrante = 4;
        }
    
        return cuadrante;
    }

    calcularMasCercano(puntos: Punto[]): void {
        for (let i = 0; i < puntos.length; i++) {
          
           for(let j = 0; j < puntos.length - i - 1; i++){
    
            if (this.calcularDistancia(puntos[j]) > this.calcularDistancia(puntos[j+1])) {
                let lejano:Punto = puntos[j];
    
                puntos[j] = puntos[j+1];
                puntos[j+1] = lejano;
            }
          }
        }
    }
}

export {Punto}