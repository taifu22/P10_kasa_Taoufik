import React from 'react';
import { useEffect, useState } from 'react';
import Tag from '../components/Tag';
import DropDown from '../components/DropDown';
import Lightbox from '../components/Lightbox';
import Erreur_404 from './Erreur_404';
import { useParams } from 'react-router-dom';

function Logement() {

    let {logementId} = useParams();
    const [datalogement1, setDataLogement1] = useState();

   useEffect(() => {
       fetch(' ../fichier.json', {
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
   const logementId_slice = logementId.slice(1);

   let result;

    if (datalogement1) {
        result = datalogement1.logements.find((el) => {
            if (el.id === logementId_slice) {
                return el;
            } 
        })
    }
    if (datalogement1 && result == undefined) {
        return <Erreur_404 />
    }

   let star = [1,2,3,4,5]

    return  datalogement1 && 
        <div className='div-logements'>
             <Lightbox data={result.pictures} image={result.pictures[0]} />
             <div className='container-logements'>
                <div className='div-title-logements'>
                    <div className='div-title-logements-city'>
                        <p className='p-title-logements'>{result.title}</p>
                        <p className='p-location'>{result.location}</p>
                    </div>
                    <div className='div-tag-logement'>
                        {result.tags.map((item, index) => {
                            return <Tag tag={item} key={'tag'+index}/>
                        })}
                    </div>
                </div> 
                <div className='div-name-star-logement'>
                    <div className='host-name-logement'>
                        <p>{result.host.name}</p>
                        <img src={result.host.picture}></img>
                    </div>
                    <div className='div-star-logement'>
                        {star.map((item, index) => {
                            return item <= result.rating ? <i key={'key-etoile'+index} className=" fa fa-solid fa-star"></i> : <i key={'key-etoile'+index} style={{color:'#E3E3E3'}} className=" fa fa-solid fa-star"></i>
                        })}
                    </div>
                </div>
             </div>
             <div className='list-dropdown'>
               <div className='container-dropdown'>
                    <DropDown title='Description' text={result.description}/>
               </div>
                <div className='container-dropdown'>
                    <DropDown title='Equipements' text={result.equipments.map((item,index) => {
                        return <p key={'p'+index}>{item}</p>
                    })}/>
                </div>
             </div>
        </div>
}

export default Logement;