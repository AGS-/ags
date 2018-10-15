import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.css';

const Layout = ({children}) => (
  <div>
    <Helmet
      title={'Angel Gomez Salazar'}
      meta={[
        {
          name: 'description',
          content:
            'Angel Gomez Salazar is a San Francisco based Software Engineer building cool stuff at Facebook. Currently on the Oculus PC Team, previously GraphQL.',
        },
        {
          name: 'keywords',
          content:
            'software, engineer, Facebook, Angel Gomez, Angel Gomez Salazar, developer, programming, JavaScript',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
