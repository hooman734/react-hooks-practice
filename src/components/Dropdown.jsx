import React, { useState } from 'react';

const Dropdown =({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    const renderedOptions = options.map((option) => {
        if (option === selected) {
            return null;
        }
        return (
            <div
                key={option.value}
                className="item"
                style={{color: 'darkslategray'}}
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div
                    onClick={() => {setOpen(!open)}}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon" />
                    <div className="text" style={{fontWeight: 'bold'}}>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;