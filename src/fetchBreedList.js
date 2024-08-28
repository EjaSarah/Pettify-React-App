const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1]; // Destructure to get the ID from the queryKey array
  if (!animal) return [];
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not okay`);
  }

  return await apiRes.json();
};

export default fetchBreedList;
