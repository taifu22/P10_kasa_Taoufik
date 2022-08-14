import React from 'react';
import { useEffect, useState } from 'react';
import Tag from '../components/Tag';
import DropDownLogement from '../components/DropDownLogement'
import Lightbox from '../components/Lightbox';

function Logement(props) {

    const [datalogement1, setDataLogement1] = useState();

   useEffect(() => {
       fetch('http://localhost:3000/fichier.json', {
           headers : { 
             'Content-Type': 'application/json',
             'Accept': 'application/json'
            }})
       .then(response => { 
        return response.json()
       })
       .then(data => {
        setDataLogement1(data)
       })
   }, [])

   //recuperation de l'id du logement depuis le url (aprés le ?)
   const url_id = window.location.search;
   const url_slice = url_id.slice(1);

   let array = [];
   let result;

    if (datalogement1) {
        result = datalogement1.logements.find((el) => {
            if (el.id == url_slice) {
                return el;
              }
        })
        array.push(result);
    }

   let star = [1,2,3,4,5]

    return datalogement1 && (
        <div className='div-logements'>
             <Lightbox data={result.pictures} image={result.pictures[0]} />
             <div className='container-logements'>
                <div className='div-title-logements'>
                    <div className='div-title-logements-city'>
                        <p className='p-title-logements'>{result.title}</p>
                        <p className='p-location'>{result.location}</p>
                    </div>
                    <div className='div-tag-logement'>
                        {result.tags.map(item => {
                            return <Tag tag={item}/>
                        })}
                    </div>
                </div> 
                <div className='div-name-star-logement'>
                    <div className='host-name-logement'>
                        <p>{result.host.name}</p>
                        <div className='round-name-logement'>
                        </div>
                    </div>
                    <div className='div-star-logement'>
                        {star.map((item) => {
                            return item <= result.rating ? <i className=" fa fa-solid fa-star"></i> : <i style={{color:'#E3E3E3'}} className=" fa fa-solid fa-star"></i>
                        })}
                    </div>
                </div>
             </div>
             <div className='list-dropdown'>
                <DropDownLogement title='Description' text={result.description}/>
                <DropDownLogement title='Equipements' text={result.equipments.map(item => {
                    return <p>{item}</p>
                 })}/>
             </div>
        </div>
    );
}

export default Logement;