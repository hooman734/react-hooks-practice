import React, { useState, useEffect, useRef } from 'react';

const Dropdown =({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onBodyClick = (event) => {
            console.log(`----> ${ref.current.contains(event.target)}`)
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(!open);
        }

        document.body.addEventListener('click', onBodyClick);

        return (() => {
            document.body.removeEventListener('click', onBodyClick);
        });
    },  []);

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
        <div ref={ref} className="ui form">
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