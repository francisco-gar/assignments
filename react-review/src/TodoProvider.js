import React, { Component, createContext } from 'react'

// import mockData from './mockData/todos.json'

import axios from 'axios'
const todoUrl = 'https://api.vschool.io/francisco/todo';

const {Consumer, Provider} = createContext()

export default class TodoProvider extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            loading: true,
            errMsg: null
        }
        this.addTodo = this.addTodo.bind(this)
    }

    getTodos(url){
        return axios.get(url)
        .then(response => this.setState({
            todos: response.data,
            loading: false,
            errMsg: null
        }))
    }

    addTodo(todo) {
        return axios.post(todoUrl, todo)
        .then(response => this.setState(ps => ({
            todos:[...ps.todos, response.data]
        })))
    }

    componentDidMount(){
        this.getTodos(todoUrl)
    }

    render() {
        const value = {
            ...this.state,
            addTodo: this.addTodo
        }
        return (
            
            
                <Provider value={value}>
                    {this.props.children}
                </Provider>
            
        )
    }
}

export const withTodoContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props}/>}
    </Consumer>
)
