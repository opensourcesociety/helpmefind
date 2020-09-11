import React from 'react';

import AppBar from 'sections/AppBar';
// import Menu from 'sections/Menu';

function Navigation() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleMenuOpen = () => {
  //   setIsMenuOpen(true);
  // };

  // const handleMenuClose = () => {
  //   setIsMenuOpen(false);
  // };

  return (
    <>
      {/* <Menu isOpen={isMenuOpen} onClose={handleMenuClose} onOpen={handleMenuOpen} /> */}
      <AppBar />
    </>
  );
}

export default Navigation;
