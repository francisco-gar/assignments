import React from 'react'

import { Link } from 'react-router-dom'

import { withTodoContext } from './TodoProvider'

import styles from './assets/styles/SideBar.module.css'

function SideBar({ todos }) {
    const links = todos.map(todo => (
        <Link
            key={todo._id}
            to={{
                pathname: `/todos/${todo.id}`,
                state: { todo }
            }}>
            {todo.title}
        </Link>))
    return (
        <div>
            <div className={styles.wrapper}>
                {links}
            </div>

        </div>
    )
}

export default withTodoContext(SideBar)
