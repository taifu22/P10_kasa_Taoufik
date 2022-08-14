import React, { useState } from 'react';

function DropDownLogement(props) {

    const [toggleDropdownLogement, setToggleDropdownLogement] = useState(false)

    function handleDropdownLogement() {
        setToggleDropdownLogement(!toggleDropdownLogement);
    }

    return (
        <div className='dropdown-logements'>
            <div className='dropdown-logements-header'>
                <p>{props.title}</p>
                {toggleDropdownLogement ? <i onClick={handleDropdownLogement} className="rotate1 fa fa-solid fa-angle-up"></i> : 
                <i onClick={handleDropdownLogement} className="rotate2 fa fa-solid fa-angle-down"></i>}
            </div>
            {toggleDropdownLogement && <div className='dropdown-logements-body'>
                 {props.text}
            </div>}
        </div>
    );
}

export default DropDownLogement;