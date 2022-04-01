import React from 'react';

const Footer = () => {
  return (
    <div className='p-10 mt-10 text-center border-t border-gray-200 dark:border-gray-700 '>
      <div>{new Date().getFullYear()} Voogl, Inc. Created by Vanessa Mitelman</div>
    </div>
  );
};

export default Footer;
