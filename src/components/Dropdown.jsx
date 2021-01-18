import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.body.addEventListener('click', onBodyClick);

    return (() => {
      document.body.removeEventListener('click', onBodyClick);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option === selected) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        style={{ color: 'darkslategray' }}
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
          onClick={(event) => {
            event.stopPropagation();    // this is needed so the event listener callback on document.body
                                        // does not also get called. we stopped propagation of event.
            setOpen(!isOpen);
          }}
          className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
        >
          <i className="dropdown icon" />
          <div className="text" style={{ fontWeight: 'bold' }}>{selected.label}</div>
          <div className={`menu ${isOpen ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;