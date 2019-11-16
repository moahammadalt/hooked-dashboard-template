import React, { useContext } from 'react';

import { StoreContext } from '../../contexts';

function CreateProduct() {

  const { data } = useContext(StoreContext);
  
  return (
    <div>CreateProduct page</div>
  );
}

export default CreateProduct;
