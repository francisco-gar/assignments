// add new items
// get all items
// delete items
// edit items
// attack all items individually

// page loads, send a GET request --> get an array back and DISPLAY INFO
    // what does displaying actually means --- LOOP THROUGH DATA and CONVERT raw data to DOM nodes

// POST
// type into form => submit form--> gatherall inputs into request object ->> post request then display reponse data

const ul = document.querySelector('ul');
const form = document.querySelector('form');

const baseUrl = 'https://api.vschool.io/francisco/todo/';

function getAllTodos(url){
    return axios.get(url)
        .then(response => response.data)
    
}

function renderTodo(todo){
    const li = document.createElement('li');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const imgUrl = document.createElement('p');
    const completed = document.createElement('input');
    const deleteBtn = document.createElement('button');

// modifications
    title.textContent = todo.title;
    description.textContent = todo.description;
    price.textContent = todo.price;
    imgUrl.textContent = todo.imgUrl;
    completed.type = 'checkbox';
    completed.checked = todo.completed;
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', handleDelete(baseUrl + todo._id, li));
    completed.addEventListener('input', handleEdit(baseUrl + todo._id))
    
// append to the DOM
    ul.appendChild(li);
    [title, description, price, imgUrl, completed, deleteBtn].forEach(el => li.appendChild(el));

}

function renderList(todos){
    todos.forEach(renderTodo)
}



getAllTodos(baseUrl)
    .then(renderList);

function handleSubmit(e){
    e.preventDefault();
    const todo = {
        title: this.title.value,
        description: this.description.value,
        imgUrl: this.imgUrl.value,
        price: this.price.value
    }
    addTodo(baseUrl, todo)
        .then(renderTodo)
        .then(() => this.reset());
}

function addTodo(url, todo){
    return axios.post(url, todo)
        .then(response => response.data);
}

form.addEventListener('submit', handleSubmit)

// delete process

function handleDelete(url, listItem){
   
    // delete form server and remvove li from the DOM

    return e => {
        deleteTodo(url)
            .then(() => listItem.remove());
    }
    
}

function deleteTodo(url){
    return axios.delete(url)
    
}

// Edit
// click the checkbox --> put request --> 

function handleEdit(url){
    return e => {
        editTodo(url, {completed: e.target.checked})
    }
}

function editTodo(url, updater){
    return axios.put(url, updater)
        .then(response => response.data)
}