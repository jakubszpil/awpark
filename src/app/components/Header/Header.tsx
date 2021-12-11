import {Container, Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './Header.css';
import {APP_PATHS} from 'app/contants';
import auth from 'app/services/auth';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

function Header() {
  const isAuth = auth.isAuthenticated;

  return (
      <Navbar bg="white" variant="light" expand="lg" className="header sticky-top" collapseOnSelect>
        <Container fluid="lg">
          <LinkContainer to={APP_PATHS.HOME}>
            <Navbar.Brand>awPark</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle className="header__toggle" aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            {!isAuth ? (
                <>
                  <Nav className="me-auto">
                    <LinkContainer to={APP_PATHS.HOME}>
                      <Nav.Link>OVERVIEW</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={APP_PATHS.PRICING}>
                      <Nav.Link>PARK NOW</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={APP_PATHS.ABOUT}>
                      <Nav.Link>BOOK A VEHICLE</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={APP_PATHS.CAREER}>
                      <Nav.Link>COOPERATION</Nav.Link>
                    </LinkContainer>
                  </Nav>
                  <Nav>
                    <LinkContainer to={APP_PATHS.HOME}>
                      <Nav.Link><FontAwesomeIcon icon={["fab", "facebook"]}/></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={APP_PATHS.HOME}>
                      <Nav.Link><FontAwesomeIcon icon={["fab", "twitter"]}/></Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={APP_PATHS.HOME}>
                      <Nav.Link><FontAwesomeIcon icon={["fab", "youtube"]}/></Nav.Link>
                    </LinkContainer>
                  </Nav>
                </>
            ) : (
                <Nav className="mr-auto">
                  <LinkContainer to="/service">
                    <Nav.Link>Service</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                  </LinkContainer>
                </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
