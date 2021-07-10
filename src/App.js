import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Fragment } from 'react';
import { Header, Footer } from './components';
import Pages from './pages';

function App() {
  return (
    <Fragment>
      <Header />
      <Pages />
      <Footer />
    </Fragment>
  );
}

export default App;
