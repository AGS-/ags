import React from 'react';

const Links = ({position}) => (
  <div className={position === 'left' ? 'links-leftpane' : 'links-rightpane'}>
    <a href="https://github.com/ags-">GH: ags-</a>
    <br />
    <a href="https://twitter.com/ags1_0">Twitter: @ags1_0</a>
    <br />
    <a href="https://www.instagram.com/ags1.0/">IG: @ags1.0</a>
  </div>
);

export default () => (
  <div className="contact">
    <div className="contact-contents">
      <div className="leftpane">
        <h2 className="leftpane-top">Contact</h2>
        <Links position="left" />
      </div>
      <div className="rightpane">
        <p className="rightpane-top">
          Angel Gomez Salazar is a San Francisco based Software Engineer
          building cool stuff at Facebook. Currently leading the Infra org at
          Facebook Reality Labs, previously on the GraphQL and Oculus PC Core
          teams.
        </p>
        <Links position="right" />
      </div>
    </div>
  </div>
);
