import React, { useContext, useEffect } from 'react';

import { LayoutContext } from '../../contexts';

function Home() {

  const { setHeaderComponent } = useContext(LayoutContext);

  useEffect(() => {
    setHeaderComponent(<b>Create new product</b>);
    return () => {
      setHeaderComponent(null);
    };
  }, []);

  return (
    <div>Home page</div>
  );
}

export default Home;
