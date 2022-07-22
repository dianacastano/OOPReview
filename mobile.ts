class Mobile {
    public name: string;
    public model: string;
    public trademark: string;
    public sdSize: string;
    public color: string;
    public  is5G: boolean;
    public cameraNumber: number;
    public price: number;
  
    constructor( name: string, model: string, trademark: string, sdSize: string, color: string,
      is5g: boolean, cameraNumber: number,price: number) {

      this.name = name;
      this.model = model;
      this.trademark = trademark;
      this.sdSize = sdSize;
      this.color = color;
      this.is5G = is5g;
      this.cameraNumber = cameraNumber;
      this.price = price;
    }
  
    public print(): void {
      for (let prop in this) {
        switch (prop) {
          case "name":
            console.log(`The characteristics of the mobile ${this.name} are: \n`);
            break;
          case "model":
          case "trademark":
          case "sdSize":
          case "color":
          case "is5G":
          case "cameraNumber":
          case "price":
            console.log(`${prop}: ${eval("this." + prop)}`);
            break;
        }
      }
      console.log("");
    }
}

export {Mobile}