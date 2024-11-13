import { ICard } from "../interface/DataInteface";

import './styles.css'

const Card = ({name, image, status, species}:ICard) => (
  <div className="cardContent">
  <img src={image} alt={name} />
  <h2>{name}</h2>
  <div style={{display: 'flex', flexDirection: 'column'}}>
    <span>{`Status: ${status}`}</span>
    <span>{`Species: ${species}`}</span>
  </div>
  </div>
)
export default Card;
