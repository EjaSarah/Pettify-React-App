const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1]; // Destructure to get the ID from the queryKey array

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not okay`);
  }

  return await apiRes.json();
};

export default fetchPet;
