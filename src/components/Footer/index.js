import React from 'react';

const Footer = () => {
    return (
      <footer className="app-footer">
        <span className="d-inline-block ml-auto">
        Copyright &copy; 2014 - {1900 + new Date().getYear()}{" "} <a href="http://www.stackuptech.com" target="_blank" rel="noopener noreferrer">Stackup Technology Solutions</a> All rights reserved
        </span>
      </footer>
    );
  }
;

export default Footer;
