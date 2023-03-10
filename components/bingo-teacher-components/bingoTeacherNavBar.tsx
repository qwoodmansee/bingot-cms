'use client';

import React from 'react';

export const BingoTeacherNavBar = () => {
  return (
    <Navbar className=''>
      <NavbarBrand href='#'> </NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNav orientation='start'>
          <NavbarItem>
            <NavbarLink href='/learn'>Bingo Teacher</NavbarLink>
          </NavbarItem>
        </NavbarNav>
        <NavbarNav orientation='end'>
          <NavbarItem>
            <NavbarLink href='/blog'>Development Blog</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href='/user/login'>Login</NavbarLink>
          </NavbarItem>
        </NavbarNav>
      </NavbarCollapse>
    </Navbar>
  );
};

/* Navbar logic */

const style = {
  navbar: `fixed px-4 py-2 top-0 w-full lg:flex lg:flex-row lg:items-center lg:justify-start lg:relative bg-secondary-600 shadow-md`,
  brand: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl whitespace-nowrap text-primary-100 hover:text-gray-200`,
  toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow text-primary-100`,
  item: `whitespace-pre cursor-pointer px-4 py-3 hover:text-gray-200 text-primary-100`,
  collapse: {
    default: `border-t border-gray-200 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none bg-secondary-600`,
    open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none`,
    close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
  },
  nav: {
    start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
    middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
    end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
  },
};

interface NavbarContextType {
  open: boolean;
  toggle: () => void;
}

const NavbarContext = React.createContext<NavbarContextType | null>(null);

const Navbar = ({ children, className }) => {
  const [open, setOpen] = React.useState(false);
  const navbarRef = React.useRef(null);

  const toggle = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  // close navbar on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!navbarRef.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, navbarRef]);

  return (
    <NavbarContext.Provider value={{ open, toggle }}>
      <nav ref={navbarRef} className={`${className} ${style.navbar}`}>
        {children}
      </nav>
    </NavbarContext.Provider>
  );
};

const useToggle = () => React.useContext(NavbarContext);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarBrand = ({ children, href }) => (
  <a href={href} className={style.brand}>
    <strong>{children}</strong>
  </a>
);

const NavbarToggler = () => {
  const { toggle } = useToggle();
  return (
    <button
      type='button'
      aria-expanded='false'
      aria-label='Toggle navigation'
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
};

const NavbarCollapse = ({ children }) => {
  const { open } = useToggle();
  return (
    <div
      style={{ backgroundColor: 'inherit' }}
      className={`${style.collapse.default}
        ${open ? style.collapse.open : style.collapse.close}`}
    >
      {children}
    </div>
  );
};

const NavbarNav = ({ children, orientation }) => (
  <ul className={style.nav[orientation]}>{children}</ul>
);

const NavbarItem = ({ children }) => <li className={style.item}>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const NavbarLink = ({
  children,
  href,
  active = undefined,
  activeClass = undefined,
}) => (
  <a href={href} className={active ? activeClass : ''}>
    {children}
  </a>
);
