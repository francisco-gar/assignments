import React, { Component, createContext } from 'react'

import axios from 'axios';

const { Consumer, Provider } = createContext()

export default class LessonProvider extends Component {
    constructor() {
        super();
        this.state = {
            lessons: []
        }
        this.addLesson = this.addLesson.bind(this)
        this.editLesson = this.editLesson.bind(this)
        this.delLesson = this.delLesson.bind(this)

    }

    getLessons(url) {
        return axios.get(url)
            .then(response =>
                this.setState({
                    lessons: response.data
                }))
    }

    addLesson(lesson) {
        return axios.post('/api/lessons/', lesson)
            .then(response => this.setState(ps => ({
                lessons: [...ps.lessons, response.data]
            })))
    }

    editLesson(id, updatedLesson) {
        axios.put(`/api/lessons/${id}`, updatedLesson)
            .then(response =>
                this.setState(ps => ({
                    lessons: ps.lessons.map(lesson => lesson._id === id ? response.date : lesson)
                })))
    }

    delLesson(id, lesson) {
        return axios.delete(`/api/lessons/${id}`)
            .then(() => {
                this.setState(ps => ({
                    lessons: ps.lessons.filter((x) => x._id !== id)
            }))
    })
}

    componentDidMount() {
        this.getLessons('/api/lessons/')
    }

    render() {
        const value = {
            ...this.state,
            addLesson: this.addLesson,
            editLesson: this.editLesson,
            delLesson: this.delLesson
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withLessonContext = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)