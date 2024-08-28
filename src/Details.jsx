import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
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
    // onClick={() => alert("hey")}..you can put your pop up modal  anywhere
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {/* here is another way of writing if statements.. showmodal ? ...if no show modal */}
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button>Yes</button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
