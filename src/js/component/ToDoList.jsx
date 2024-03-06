import React, { useState } from 'react';
import Item from './Item';

export default function ToDoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between p-0">
                    <input
                        style={{ width: '100%' }}
                        type="text"
                        name="todoInput"
                        id="todoInput"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleAddItem}>Add</button>
                </li>
                {items.map((item, index) => (
                    <Item key={index} value={item} onClick={handleRemoveItem} />
                ))}
            </ul>
        </div>
    );
}
