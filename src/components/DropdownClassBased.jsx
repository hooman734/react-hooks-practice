import React, { createRef, Component } from 'react';

class DropdownClassBased extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.ref = createRef();
  }

  onBodyClick = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick);
  }

  render() {
    const { options, selected, onSelectedChange } = this.props;

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
    });


    return (
      <div ref={this.ref} className="ui form">
        <div className="field">
          <label className="label">Select a Color</label>
          <div
            onClick={(event) => {
              event.stopPropagation();    // this is needed so the event listener callback on document.body
              // does not also get called. we stopped propagation of event.
              this.setState({ open: !this.state.open });
            }}
            className={`ui selection dropdown ${this.state.open ? 'visible active' : ''}`}
          >
            <i className="dropdown icon" />
            <div className="text" style={{ fontWeight: 'bold' }}>{selected.label}</div>
            <div className={`menu ${this.state.open ? 'visible transition' : ''}`}>{renderedOptions}</div>
          </div>
        </div>
      </div>
    );
  }

}

export default DropdownClassBased;