import React, { useState, useEffect } from 'react';
import '../styles/search.css';
import Item from './Item';


const data = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin",
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin",
    "Siri",
    "Alexa",
    "Google",


];

const Search = () => {

    const [searchQuerry, setSearchQuerry] = useState("");
    const [searchResult, setSearchResult] = useState([]);





    function handleChange(e) {
        setSearchQuerry(e.target.value)
    }




    useEffect(() => {
      
        const result = data.filter(people => people.toLowerCase().includes(searchQuerry.toLowerCase()));
        setSearchResult(result);

    }, [searchQuerry]);




    return (
        <div className="top">
            <div className="Search">
                <h1>Duck Duck Go</h1>
                <input
                className='rest'
                    type='text'
                    value={searchQuerry}
                    placeholder='Search...'
                    onChange={handleChange}
                />
                <p>Do your search here...</p>
            </div>
            <div className="section">

                {searchResult.map(item => (
                    <Item item={item} />

                ))}

            </div>

        </div>
    );
}

export default Search;