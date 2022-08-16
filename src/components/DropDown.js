import React, { useState } from 'react';

function DropDown(props) {

    const [toggleDropdown, setToggleDropdown] = useState(false)

    function handleDropdown() {
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <div className='dropdown'>
            <div className='dropdown-header'>
                <p>{props.title}</p>
                {toggleDropdown ? <i onClick={handleDropdown} className="rotate1 fa fa-solid fa-angle-up"></i> : 
                <i onClick={handleDropdown} className="rotate2 fa fa-solid fa-angle-down"></i>}
            </div>
            {toggleDropdown && <div className='dropdown-body'>
                 <p>{props.text}</p>
            </div>}
        </div> 
    );
}

export default DropDown;