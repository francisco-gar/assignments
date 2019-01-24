const uuid = require('uuid')

const Bounties = function (bounty) {
    this._id = uuid();
    this.firstName = bounty.firstName;
    this.lastName = bounty.lastName;
    this.living = bounty.living;
    this.bountyAmount = bounty.bountyAmount;
    this.type = bounty.type;
}

const Database = function () {
    this.bounties = [];
}

Database.prototype.find = function () {
    return this.bounties
}

Database.prototype.save = function (bounty) {
    const newBounties = new Bounties(bounty);
    this.bounties.push(newBounties);
    return newBounties
}

Database.prototype.findByIdAndRemove = function (id) {
    const foundBounty = this.bounties.find(bounty => {
        return bounty._id === id;
    })
    if (foundBounty === undefined) return;

    const index = this.bounties.indexOf(foundBounty);
    this.bounties.splice(index, 1)
}

module.exports = new Database();

Database.prototype.findByIdAndUpdate = function (id, updates) {
    const foundBounty = this.bounties.find(todo => {
        return todo._id === id;
    })
    if (foundBounty === undefined) return;
    const index = this.bounties.indexOf(foundBounty);
    const newBounty = { ...foundBounty, ...updates};
    this.bounties.splice(index, 1, newBounty);
    return newBounty
}