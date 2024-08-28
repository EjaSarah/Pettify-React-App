import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
// useEffect is something that goes out of your code to go do something outside eg.. go retrieve this for me..typically an api request
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Empty array ensures this runs only once when the component mounts

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets(); // Fetch pets on form submission
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed(""); // Reset breed when a new animal is selected
            }}
          >
            <option value="">Select an animal</option>
            {Animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="">Select a breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
