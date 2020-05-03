import React, { useContext, useEffect } from 'react';

import { LayoutContext } from '../../contexts';

function CreateProduct() {

  const { setHeaderComponent } = useContext(LayoutContext);

  useEffect(() => {
    setHeaderComponent(<b>Create new product</b>);
    return () => {
      setHeaderComponent(null);
    };
  }, []);
  
  return (
    <div>CreateProduct page</div>
  );
}

export default CreateProduct;
