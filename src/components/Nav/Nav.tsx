import { Link } from "react-router-dom"
import styled from "styled-components"

const NavBar = styled.header`
    position: fixed;
    width: 100%;
    height: 5rem;
    padding: 0 1rem;
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background: white;
    border: 1px solid black; 
    z-index:1;
`

const HomeLink = styled(Link)`
    min-width: 5rem;
    text-decoration: none;
    padding: 1rem 0;
    margin: 0 1rem;

    &:visited {
        color: #112D4E;
    }
`

const ButtonLink = styled(HomeLink)`
    text-transform: uppercase;
    background: lightgreen;
    border: 1px solid black;
    text-align: center;
`
const Input  = styled.input`
    border: 1px solid black;
    padding: 1rem 0;
    margin: 0 1rem;
`

const Nav = () => {
    return (
        <NavBar>
            <ButtonLink to="/">Home</ButtonLink>
            <Input type="text" placeholder="Search meal by name..." name="search"/>
        </NavBar>
    )
}

export default Nav