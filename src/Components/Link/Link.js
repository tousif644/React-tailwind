import React from 'react';

const Link = (props) => {
    const {name, link} = props.routes;
    console.log(props);
    return (
        <li className='mr-16'>
            <a href={link}>{name}</a>
         </li>
    );
};

export default Link;