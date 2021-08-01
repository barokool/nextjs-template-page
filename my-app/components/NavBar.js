import styled from 'styled-components'
import Link from 'next/link'

const Maincontainer = styled.nav`
height:80px;
background:black;
color:#fff;
display:flex;
justify-content: space-between;
align-items:center;
`;
const Styledlink = styled.a`
padding:0 0.5rem;
margin:1rem;
`

const NavBar = () => {
    return (
        <Maincontainer >
            <div>
                <Link href="/" passHref>
                    <Styledlink>Home</Styledlink>
                </Link>
            </div>
            <div>
                <Link href="/about" passHref>
                    <Styledlink>About</Styledlink>
                </Link>
                <Link href="/contact" passHref>
                    <Styledlink>Contact</Styledlink>
                </Link>

            </div>
        </Maincontainer>
    );
}

export default NavBar;
