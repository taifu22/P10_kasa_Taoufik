import { Link } from 'react-router-dom';

function LogementHome(props) {
    //console.log(props.key);
    return ( 
        <Link to={`fiche_logement/:${props.title.id}`}>
           <div style={{backgroundSize:'cover', backgroundPosition:'center' ,backgroundImage: `url(${props.title.cover})` }} className='container-logement-home'>
              <p>{props.title.title}</p>
           </div>
        </Link>
    );
}

export default LogementHome;



