
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const SubMenu = ({ title, children, closeParentMenu }) => {
  const [open, setOpen] = useState(false);
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });

  const submenuStyles = {
    position: 'relative',
  };

  const submenuMenuStyles = {
    position: 'absolute',
    top: isMobileDevice ? '100%' : '0',
    left: isMobileDevice ? '0' : '100%',
    marginTop: '-1px',
    backgroundColor: '#0a2e38', 
    border: '1px solid #dee2e6', 
    borderRadius: '0.25rem', 
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)', 
    minWidth: '200px', 
    color: '#f9f9f9', 
  };

  return (
    <Dropdown
      as="li"
      style={submenuStyles}
      onClick={isMobileDevice ? () => setOpen(!open) : null}
      onMouseEnter={!isMobileDevice ? () => setOpen(true) : null}
      onMouseLeave={!isMobileDevice ? () => setOpen(false) : null}
      show={open}
      onToggle={(isOpen) => setOpen(isOpen)}
    >
      <Dropdown.Toggle as={Dropdown.Item} style={{color: '#f9f9f9'}}>{title}</Dropdown.Toggle>
      <Dropdown.Menu style={submenuMenuStyles}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            onMouseEnter: () => setOpen(true),
            onMouseLeave: () => setOpen(false),
            onClick: () => {
              setOpen(false); 
              setTimeout(closeParentMenu, 50); 
            },
            style: {color: '#f9f9f9'}, 
          });
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SubMenu;