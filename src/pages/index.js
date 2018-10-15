import React from 'react';

import Contact from '../components/contact';
import Layout from '../components/layout';
import Main from '../components/main';

const IndexPage = () => (
  <Layout>
    <Main />
    <svg
      className="arrow"
      x="0px"
      y="0px"
      viewBox="0 0 32.634 32.634"
      width="2.5em"
      height="2.5em"
    >
      <g>
        <path
          d="M16.317,32.634c-0.276,0-0.5-0.224-0.5-0.5V0.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v31.634   C16.817,32.41,16.593,32.634,16.317,32.634z"
          fill="#FFFFFF"
        />
        <path
          d="M16.315,32.634L16.315,32.634c-0.133,0-0.26-0.053-0.354-0.146L3.428,19.951c-0.195-0.195-0.195-0.512,0-0.707   s0.512-0.195,0.707,0l12.179,12.183l12.184-12.183c0.195-0.195,0.512-0.195,0.707,0s0.195,0.512,0,0.707L16.668,32.487   C16.574,32.581,16.448,32.634,16.315,32.634z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
    <Contact />
  </Layout>
);

export default IndexPage;
