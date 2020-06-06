class Vendor {
  itemBackInStochObservable;
  constructor() {
    this.itemBackInStochObservable = new Observable();
  }
  registerItemBackInStock(whoAreYou, summonMe) {
    this.itemBackInStochObservable.registerObservable(whoAreYou, summonMe);
  }
  notifyItemIsBack() {
    this.itemBackInStochObservable.notify();
  }
}
class Customer {
  buyMeThat() {
    console.log("Buy that");
  }
  constructor(vendor) {
    vendor.registerItemBackInStock(this, this.buyMeThat);
  }
}
class Observable {
  observers = [];

  callback;
  constructor() {}
  registerObservable(whoAreYou, summonMe) {
    this.observers.push(whoAreYou);
    this.callback = summonMe;
  }
  notify() {
    this.callback();
  }
}

class Container {
  asos;
  wafa;
  constructor() {
    this.asos = new Vendor();
    this.wafa = new Customer(this.asos);
    setTimeout(() => {
      this.asos.notifyItemIsBack();
    }, 5000);
  }
}

container = new Container();

