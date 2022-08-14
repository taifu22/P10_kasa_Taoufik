import React from 'react';
import ImageHome from '../assets/ImageHome.png';
import LogementHome from '../components/LogementHome';
import { useEffect, useState } from 'react';

function Home() {

    const [datalogement, setDataLogement] = useState();

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
         setDataLogement(data)
        })
    }, []) 

    //console.log(datalogement && datalogement.logements);

    return (
        <div className='div-home'>
           <div className='image-home'>
               <img src={ImageHome} alt='image-home'></img>
               <div className="texte_centrer">Chez vous, partout et ailleurs</div>
           </div>
           <div className='container-home'>
             {datalogement && datalogement.logements.map(item => {
                return <LogementHome title={item}/>
             })}
           </div>
        </div>
    );
}

export default Home;