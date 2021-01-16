import React from 'react';
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

export default () => {
    return (<div>
        <br />
        <Search></Search>
        {/* <Accordion items={items}></Accordion> */}
    </div>)
}