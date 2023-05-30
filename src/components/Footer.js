import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <p>find a react and add local time</p>
  <ul>
    <li><a href="mailto:keelysherman00@gmail.com">Email</a></li>
    <li><a href="">Instagram</a></li>
    <li><a href="">GitHub</a></li>
    <li><a href="">LinkedIn</a></li>
  </ul>
      </div>
    </footer>
  );
}

export default Footer;
