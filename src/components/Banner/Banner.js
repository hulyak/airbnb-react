import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';

import Search from '../Search/Search';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}

        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch()}>
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Far is closer now</h1>
        <h5>
          Settle in a new place. Explore nearby accommodations to live, work or
          just relax.
        </h5>
        <Button variant="outlined">Explore the immediate surroundings </Button>
      </div>
    </div>
  );
}

export default Banner;
