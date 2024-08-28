import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams(); // Get the pet ID from the URL parameters
  const results = useQuery(["details", id], fetchPet); // Correctly use the queryKey with an array

  // Show a loading indicator while the data is being fetched
  if (results.isLoading) {
    return (
      <div className="loading-params">
        <h2 className="loader">☀️</h2>
      </div>
    );
  }

  const pet = results.data?.pets[0]; // Safely access the pet data

  // If no pet data is found, return null or a fallback UI
  if (!pet) {
    return <h2>No details available</h2>;
  }

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
