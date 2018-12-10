var travel = document.querySelector('form');

travel.addEventListener('submit', function(e){
    e.preventDefault();
    var data = {
        FirstName: this.fname.value,
        LastName: this.lname.value,
        Age: this.age.value,
        Gender: this.gender.value,
        Destination: this.destinations.value,
        DietaryrestrictionVegetarian: this.vegetarian.checked,
        DietaryrestictionKosher: this.kosher.checked,
        DietaryrestrictionLactosefree: this.lactosefree.checked,
        // DietaryrestrictionNone: this.none.value
    }
    console.log(data);
    window.alert("First Name: " + this.fname.value + "\n"+ "Last Name: " + this.lname.value + "\n"+ "Age: " + this.age.value + "\n" + "Gender: " + this.gender.value + "\n" + "Destination: " + this.destinations.value + "\n" + "Dietary Restriction: " + this.vegetarian.checked + this.kosher.checked + this.lactosefree.value);
    // handleDisplay(data);
})



