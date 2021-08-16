import React from 'react';
import Button from './Button';
import { usePage } from '../state/CharacterProvider';

const Paging = () => {
  const { page, setPage } = usePage();

  return (
    <div>
      <button disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >←</button>
      {page}
      <Button onClick={() => setPage((prevPage) => prevPage + 1)}>→</Button>
    </div>
  );
};

export default Paging;
