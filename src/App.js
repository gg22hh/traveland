import React from 'react';
import { Blog } from './components/Blog/Blog';
import { Head } from './components/Head/Head'
import { Info } from './components/Info/Info';
import { Offers } from './components/Offers/Offers';

function App() {
  return (
    <div>
	  <Head />
	  <Info />
	  <Offers />
	  <Blog />
    </div>
  );
}

export default App;
