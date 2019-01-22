import React from 'react'

import styles from './assets/styles/Detail.module.css'

function Detail(props) {
    const {todo} = props.location.state;
    const style = {backgroundColor: todo.completed ? 'green' : 'red'}
    return (
        <div style={style}className={styles.wrapper}>
             
                <h3>{todo.title}</h3>
            <p>{todo.price}</p>
            <p>{todo.description}</p>
            <p>{todo.completed}</p>
            <button>x</button> 
        </div>
    )
}

export default Detail
