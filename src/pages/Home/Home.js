import React from 'react';

import { useFetch } from '../../hooks';
import { URLS } from '../../constants';

function Home() {

  const { data } = useFetch({
    url: URLS.dashboardRetrive,
  });
  //console.log('data', data);

  return (
    <div>Home page</div>
  );
}

export default Home;
