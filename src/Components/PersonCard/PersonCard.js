import img from '../../Sources/foto.jpeg';
import './style.scss';

function PersonCard() {
  return (
    <div className="person">
      <div className="person__ti">
        <div className="person__ti--name">
          <h2>Andres Sastoque</h2>
        </div>
        <div className="person__ti__image">
          <img src={img} alt="" className="person__ti__image--foto" />
        </div>
      </div>
      <div className="person__tex">
        <div className="person__tex--description">
          Me desempeño como desarrollador Full Stack creando aplicaciones web,
          uso tecnologías como React, MongoDB, Express.js, Git,, Redux, entre
          muchas otras ... Me gusta el diseño, trabajar con herramientas como
          Illustrator, creando vectores y así aportando gran valor al FrontEnd.
          Tengo un alto dominio de metodologías agiles, desenvolviéndome de
          manera optima en equipos de trabajo teniendo una alta efectividad.
        </div>
        <div className="person--capacities">
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>React</li>
          </ul>
        </div>
        <div className="person--mail">andressastoqueyxz@gmail.com</div>
        <div className="person-github">https://github.com/AndySast</div>
      </div>
    </div>
  );
}

export default PersonCard;
