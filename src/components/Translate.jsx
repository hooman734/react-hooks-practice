import React, { useState } from 'react';
import Dropdown from "./Dropdown";

const options = [{
    label: 'Afrikaans',
    value: 'af'
}, {
    label: 'Persian',
    value: 'pe'
}, {
    label: 'English',
    value: 'en'
}, {
    label: 'Russian',
    value: 'ru'
}];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label={"Select a language"}
            />
        </>
    );
}

export default Translate;