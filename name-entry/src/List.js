import React from 'react';

import Item from './Item';

const List = ({ items }) => {
    const itemsComponents = items.map((item, i) => <Item key={i} {...item} />);
    return (
        <div className='grid'>
            {itemsComponents}
        </div>
    )
}


export default List;