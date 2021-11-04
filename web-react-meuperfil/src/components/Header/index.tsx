import { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default class Header extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Nav.Link href="/"  >
                        Meu perfil
                    </Nav.Link>
                    {/*  */}
                    <Nav.Link href="/projetos">
                        Projetos
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }

}