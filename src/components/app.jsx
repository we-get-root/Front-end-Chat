import React from 'react';
import { Route } from 'react-router-dom';

import { Authorization } from './_component/Auth/containerAuth';
import { Registration } from './_component/Regis/containerRegis';

import BlockForm from './_points/Form/index'
import BlockPage from './_points/Page/index'
import './app.scss';


const EntryPoint = (props) => {
  return (
    <>
      <Route exact path={['/', '/auth']} component={ () => <BlockForm><Authorization /></BlockForm>} />
      <Route exact path={['/regis']} component={ () => <BlockForm><Registration /></BlockForm>} />


      <Route exact path={['/page']} component={ () => <BlockPage />} />
    </>
  )
}


export default EntryPoint;

