import React from 'react';
import './header.css';

const Header = () => {
  const menuData = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
    {
      title: 'FAQ',
      path: '/faq',
    },
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
    },
    {
      title: 'Terms & Conditions',
      path: '/terms-conditions',
    },
  ];
  return (
    <>
      <div className="menu">
        <ul>
          {menuData.map((item) => (
            <li key={item.title}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
