import React from 'react';
import LinkList from './LinkList';
import '../App.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <img src="../../logo-img.svg" alt="One Wealth Place" height="50" width="50"/>
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <LinkList />
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created By <a href="https://github.com/samodev" target="_blank" rel="noopener noreferrer">Stéphane Amoudi</a>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}
