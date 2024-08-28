// always capitalise your components
// react has a one way data flow, which means you can pass something from app to pet but not the other way round.
// pet is the child and it can't mess with its parent app
//this makes debugging easy
//if pet has data thrown into it, you know it came from app
//makes data flow easy to read and explicit to follow

// a better way to do it..infusing html into javascript the right way
import { Link } from "react-router-dom";
//creating a pet component
const Pet = ({ id, name, animal, breed, images, location }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <p>
          Breed: {breed}, Location: {location}
        </p>
      </div>
    </Link>
  );
};

export default Pet;
