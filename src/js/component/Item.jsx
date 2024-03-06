import React from 'react';

export default function Item(props) {
    const { index, value = "Item de la Lista", onClick } = props;

    return (
        <li className="list-group-item d-flex justify-content-between" key={index}>
            <p className='text-center mb-0 align-middle' style={{ alignSelf: "center" }}>{value}</p>
            <button style={{ border: 0, background: "#FFFFFF" }} className='icon-link-hover' onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ height: "50px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </li>
    );
}