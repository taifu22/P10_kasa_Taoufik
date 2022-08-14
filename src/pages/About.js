import React from 'react';
import ImageAbout from '../assets/ImageAbout.png';
import DropDown from '../components/DropDown';

function About() {
    const titleFiabilite = 'Fiabilité';
    const textFiabilite = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const titleRespect = 'Respect';
    const textRespect = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const titleSercice ='Service';
    const textService = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.';
    const titleSecurite = 'Sécurité';
    const textSecurite = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.';

    return (
        <div className='div-about'>
            <div className='image-about'>
                <img src={ImageAbout} alt='image-about'></img>
            </div>
            <div className='dropdown-container'>
                <DropDown title = {titleFiabilite} text = {textFiabilite}/>
                <DropDown title = {titleRespect} text = {textRespect}/>
                <DropDown title = {titleSercice} text = {textService}/>
                <DropDown title = {titleSecurite} text = {textSecurite}/>
            </div>
        </div>
    );
}

export default About;