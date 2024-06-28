import React from 'react';
import { DropdownButton, Dropdown, Container } from 'react-bootstrap';

const GenresDropdown = () => {
  return (
    <Container className="mt-3">
      <DropdownButton id="dropdown-genres" title="Genres" variant="secondary">
        <Dropdown.Item href="#">Comedy</Dropdown.Item>
        <Dropdown.Item href="#">Drama</Dropdown.Item>
        <Dropdown.Item href="#">Thriller</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
};

export default GenresDropdown;
