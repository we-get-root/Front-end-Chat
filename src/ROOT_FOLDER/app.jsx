import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Authorization } from './_component/Auth/Auth';
import { Registration } from './_component/Regis/Regis';

import { checkTokenAuthUser } from './_state/request';

import BlockForm from './_points/Form/index'
import BlockPage from './_points/Page/index'
import './app.scss';



const EntryPoint = ({ statusAuth, checkTokenAuthUser,  ...props }) => {

  checkTokenAuthUser(localStorage.getItem('token'))

  return (
    <>
      <Route exact path={['/', '/auth']} component={() => <BlockForm><Authorization /></BlockForm>} />
      <Route exact path={['/regis']} component={() => <BlockForm><Registration /></BlockForm>} />

      <Route exact path={['/page']} component={() => <BlockPage />} />

      {/* {statusAuth ? <Redirect to="/page" /> : <Redirect to="/auth" /> } */}
    </>
  )
}
const mapPropsToState = (state) => ({
  statusAuth: state.authState.statusAuth
})


export default connect(mapPropsToState, ({ checkTokenAuthUser }))(EntryPoint)

