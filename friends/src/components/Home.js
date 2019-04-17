import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
      <header className="app-header">
        <h1>
          Friends
        </h1>
        <div>
          <Link className="link-to-list" to='/friends'>
            <div className="button-list">See list</div>
          </Link>
        </div>

      </header>
    );
}

export default Home;
