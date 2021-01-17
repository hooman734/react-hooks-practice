import React, { useState } from 'react';
import Dropdown from "./components/Dropdown";
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [{
    title: 'What is React',
    content: 'React is very good'
}, {
    title: 'Why use react?',
    content: 'React is a favorite JS library'
}, {
    title: 'How do you use react?',
    content: 'You use react bu creating components'
}];

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The shade of Gray',
        value: 'gray'
    },
    {
        label: 'The Blue color',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (<div>
        <br />
        {/*<Search></Search>*/}
        {/* <Accordion items={items}></Accordion> */}
        <Dropdown
            onSelectedChange={setSelected}
            selected={selected}
            options={options}
        />
    </div>)
}