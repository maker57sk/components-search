import React from 'react';
import '../styles/search.css';
// import logo from  '../../public/logo512.png';

const Item = ({ item }) => {
    return (


        <div className="item">
            {/* <div className="circle"></div> */}
            <div className='tag'>tag</div>
            <li>Frontend Developer</li>
            <li>{item}</li>

        </div>

    );
};

export default Item;