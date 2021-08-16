export const fetchRickAndMorty = async (page) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const { results } = await res.json();
  return results;
};
