// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var jsonData = xhr.responseText;
//         var data = JSON.parse(jsonData);
//         // console.log(data)
//         var name = data.objects[0].pokemon;
//         // console.log(name)
//         // grab array from response then loop through
//         // create new list item
//         // set text.content of the li item to name of object/character
//         // appnd it
//         console.log(data.objects[0])
//         // console.log(arr)
//         for(var i = 0; i <= data.objects[0].length; i++){
            
//         }
//     }
// };

// xhr.open("GET", "https://api.vschool.io/pokemon", true);
// xhr.send();




// how to handle promises

var request = axios.get('https://api.vschool.io/ben/todo');

request
    .then(function(response){
    console.log(response.data);
})
.catch(function(err){
    console.log(err);
})
