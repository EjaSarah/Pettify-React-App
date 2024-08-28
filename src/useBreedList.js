// here we are creating a custom hook for our animal breedlist so we don;t need to fetch it directly
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
// useEffect is something that goes out of your code to go do something outside eg.. go retrieve this for me..typically an api request

//how to get stuff from the database
export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // single question mark says the first time it is loading, dont throw me an error, double question mark says..if results and data fails ..give me an empty array
  return [results?.data?.breeds ?? [], results.status];
}
