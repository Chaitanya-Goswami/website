// Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.webp';
import SubMenu from './SubMenu';
import './Navbar.css';
import { useMediaQuery } from 'react-responsive';

export const NavbarHeightContext = React.createContext();

const App = () => {
  const [openMastery, setOpenMastery] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openCricketMarket, setOpenCricketMarket] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  const timerRef = useRef(null);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    function updateSize() {
      setTimeout(() => {
        if (navbarRef.current) {
          const navbarHeight = navbarRef.current.getBoundingClientRect().height;
          localStorage.setItem('navbarHeight', navbarHeight);
        }
      }, 1000); 
    }
    window.addEventListener('resize', updateSize);
    updateSize(); 
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const closeDropdown = setOpen => {
    if (isMobileDevice) {
      setOpen(false);
    }
  };

  const closeAll = () => {
    setOpenMastery(false);
    setOpenServices(false);
    setOpenCricketMarket(false);
    setOpenMore(false);
  };

  const handleMouseEnter = setOpen => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    closeAll();
    setOpen(true);
  };

  const handleMouseLeave = setOpen => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 50); 
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    // Add your search logic here
  };

  return (
<nav className="fixed-top navbar navbar-expand-sm navbar-dark bg-dark" ref={navbarRef}>

<NavbarHeightContext.Provider value={navbarHeight}>
    <Navbar ref={navbarRef} expand="lg" fixed="top" className="custom-navbar">
    <div>
      <Navbar bg="dark" variant="dark" expand="sm" className="fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="Company Logo" className="logo" />
            </Navbar.Brand>
            <Form inline className="search-form">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchTerm} onChange={handleSearchChange} />
            </Form>
          </div>
          <div className="d-flex align-items-center menu-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link to="/" className="custom-static-dropdown nav-link">Home</Link>
                <Dropdown
                    onMouseEnter={() => handleMouseEnter(setOpenMastery)}
                    onMouseLeave={() => handleMouseLeave(setOpenMastery)}
                    show={openMastery}
                    onToggle={(isOpen) => {
                      if (!isOpen) {
                        setOpenMastery(isOpen);
                      }
                    }}
                  >
                    <Nav.Link className="dropdown-header">
                      Mastery
                    </Nav.Link>
                    <Dropdown.Menu>
                      <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenMastery)}>Training</Link>
                      <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenMastery)}>Certification</Link>
                    </Dropdown.Menu>
                  </Dropdown>
                <Dropdown
                  key={openServices ? 'open' : 'closed'} // Add this line
                  onClick={isMobileDevice ? () => handleMouseEnter(setOpenServices) : null}
                  onMouseEnter={!isMobileDevice ? () => handleMouseEnter(setOpenServices) : null}
                  onMouseLeave={!isMobileDevice ? () => handleMouseLeave(setOpenServices) : null}
                  show={openServices}
                  onToggle={(isOpen) => setOpenServices(isOpen)}
                >
                  <Dropdown.Toggle as={Nav.Link} className="dropdown-header">
                    Services
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <SubMenu title="For Umpires" closeParentMenu={() => setOpenServices(false)}>
                      <Link to="/umpire" className="dropdown-item">Register and Grow</Link>
                    </SubMenu>
                    <SubMenu title="For Organizers" closeParentMenu={() => setOpenServices(false)}>
                      <Link to="/landing" className="dropdown-item">Hire Umpires</Link>
                      <Link to="/landing" className="dropdown-item">Hire Scorers</Link>
                      <Link to="/landing" className="dropdown-item">Hire Commentator</Link>
                      <Link to="/landing" className="dropdown-item">Organize match with us</Link>
                    </SubMenu>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown
                  onMouseEnter={() => handleMouseEnter(setOpenCricketMarket)}
                  onMouseLeave={() => handleMouseLeave(setOpenCricketMarket)}
                  show={openCricketMarket}
                  onToggle={(isOpen) => {
                    if (!isOpen) {
                      setOpenCricketMarket(isOpen);
                    }
                  }}
                >
                  <Nav.Link className="dropdown-header">
                    Cricket Market
                  </Nav.Link>
                  <Dropdown.Menu>
                    <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenCricketMarket)}>Merchandise Products</Link>
                    <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenCricketMarket)}>Products</Link>
                    <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenCricketMarket)}>Accessories</Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/about-us" className="custom-static-dropdown nav-link">About Us</Link>
                <Dropdown
                  onMouseEnter={() => handleMouseEnter(setOpenMore)}
                  onMouseLeave={() => handleMouseLeave(setOpenMore)}
                  show={openMore}
                  onToggle={(isOpen) => {
                    if (!isOpen) {
                      setOpenMore(isOpen);
                    }
                  }}
                >
                <Nav.Link className="dropdown-header">
                  More
                </Nav.Link>
                <Dropdown.Menu>
                  <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenMore)}>Associations</Link>
                  <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenMore)}>Blogs and Newsletters</Link>
                  <Link to="/landing" className="dropdown-item" onClick={() => closeDropdown(setOpenMore)}>FAQs</Link>
                </Dropdown.Menu>
              </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <section>
        <div className="container">
       
        </div>
      </section>
      </div>
      </Navbar>
  </NavbarHeightContext.Provider>
  </nav>

  );
}

export default App;