import { Link } from 'react-router-dom';

function LogementHome(props) {
console.log(props);
    return ( 
        <Link to={`fiche_logement?${props.title.id}`} state='tonio cartonio'><div style={{backgroundImage: `url(${props.title.cover})` }} className='container-logement-home'>
        <p>{props.title.title}</p>
    </div></Link>
    );
}

export default LogementHome;