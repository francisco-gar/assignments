import React from 'react';

const Boxes = (props) => (
    <div style={{ backgroundColor: props.color }}>
        <h3>Title: {props.title}</h3>
        <h5>Subtitle: {props.subtitle}</h5>
        <p>Information: {props.information}</p>
        <p>Background Color: {props.color}</p>
    </div>
);

export default Boxes;