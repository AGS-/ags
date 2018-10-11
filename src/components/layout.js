import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.css';

const Layout = ({children}) => (
  <div>
    <Helmet
      title={'Angel Gomez Salazar'}
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
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
