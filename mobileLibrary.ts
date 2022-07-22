import { Mobile2 } from "./mobile2";

class MobileLibrary {

    private name: string;
    private location: string;
    private mobiles: Mobile2[];
    private totalPrice: number;
  
    constructor(name: string, location: string, mobiles: Mobile2[]) {
      this.name = name;
      this.location = location;
      this.mobiles = mobiles;
      this.totalPriceCalculation();
      
    }

    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    
    public geLocation(): string {
        return this.location;
    }
    public setLocation(value: string) {
        this.location = value;
    }
    
     public getMobiles(): Mobile2[] {
        return this.mobiles;
    }
    public setMobiles(value: Mobile2[]) {
        this.mobiles = value;
    }
    
    public getTotalPrice(): number {
        return this.totalPrice;
    }
    public setTotalPrice(value: number) {
        this.totalPrice = value;
    }
      
    public printLibrary() {
      console.log("This is all my mobiles:");
  
      for (let i = 0; i < this.mobiles.length; i++) {
          this.mobiles[i].print()
      }
  
      console.log("Price overall: ${this.getTotalPrice()}");
    }
  
    private totalPriceCalculation(): void {
      let total: number = 0;
  
      for (let i = 0; i < this.mobiles.length; i++) {
        total += this.mobiles[i].getPrice();
      }
  
      this.setTotalPrice(total);
    }
}

export {MobileLibrary}


  
    