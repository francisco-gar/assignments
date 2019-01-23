const uuid = require('uuid');

const CosmicBeverage = function (beverage) {
    this._id = uuid();
    this.name = beverage.name;
    this.origin = beverage.origin;
    this.price = beverage.price;
}

const Database = function () {
    this.cosmicBeverages = [];
}

Database.prototype.find = function () {
    return this.cosmicBeverages
}

Database.prototype.save = function (beverage) {
    const newBeverage = new CosmicBeverage(beverage);
    this.cosmicBeverages.push(newBeverage);
    return newBeverage
}

Database.prototype.findByIdAndRemove = function (id) {
    // find beverage w/ matching id
    const foundBeverage = this.cosmicBeverages.find((beverage) => {
        return beverage._id === id;
    })
    // make sure beverage isn't undefined
    if (foundBeverage === undefined) return;
    // find index of beverage
    const index = this.cosmicBeverages.indexOf(foundBeverage);

    //remove it from array
    this.cosmicBeverages.splice(index, 1)

}

Database.prototype.findByIdAndUpdate = function (id, updates) {
    // find beverage with matching ID
    const foundBeverage = this.cosmicBeverages.find(beverage => {
        return beverage._id === id;
    })

    if (foundBeverage === undefined) return;
    // find index of beverage 
    const index = this.cosmicBeverages.indexOf(foundBeverage);

    const newBeverage = { ...foundBeverage, ...updates };

    // replace old one with new one
    this.cosmicBeverages.splice(index, 1, newBeverage);
    //return newly added beverage
    return newBeverage

}


module.exports = new Database();