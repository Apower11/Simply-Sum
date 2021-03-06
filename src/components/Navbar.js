import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

export default function NavbarComponent(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="/">Simply Sum</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      <NavDropdown title="A Level Maths" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/">Past Papers</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>
    )
}
