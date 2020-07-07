import React from 'react';
import Item from './Item/Item';

class ItemInventory extends React.Component{
    
    render(){
        return(
            <div>
                <p>abcdefg</p>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <CardSelection></CardSelection>
            </div>
        );
    }
}

export default ItemInventory;
