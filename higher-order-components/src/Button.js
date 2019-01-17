import React from 'react'

function Button({ children, style, ...props }) {
    return (
        <button style={ style } {...props}>
            {children}
        </button>
    )
}

const styleButton = style => props => (
    <Button style={style}{...props}>
        {props.children}
    </Button>
)

export const OkButton = styleButton({
    backgroundColor: 'green',

})

export const XButton = styleButton({
    backgroundColor: 'red'
})

export default styleButton({backgroundColor: 'blue'})

