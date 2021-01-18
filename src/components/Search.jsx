import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (term) {
        setDebouncedTerm(term);
      }
    }, 1000);

    return (() => {
      clearTimeout(timeoutID);
    });

  }, [term]);

  useEffect(() => {
    const search = (term) => {
      axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term
        }
      }).then(({ data }) => {
        setResults(data.query.search);
      });
    };
    search(debouncedTerm);

  }, [debouncedTerm]);

  const renderedResults = results.map(result => {
    return (<div className="item" key={result.pageid}>
      <div className="right floated content">
        <a
          className="ui button"
          href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go to</a>
      </div>
      <div className="content">
        <div className="header">
          {result.title}
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    </div>);
  });

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </React.Fragment>);
}

export default Search;
