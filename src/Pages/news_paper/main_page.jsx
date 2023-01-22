import { newspaper } from 'Asset/data/newspaper';
import { Container } from 'Components';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Container } from './styles';

function Newspaper() {
    return (
        <Container>
            <header>
                <img src="" alt="" />
                <nav>
                    {newspaper.map((d) => (
                        <NavLink activeClassName="active" exact to={d.link}>
                            {d.name}
                        </NavLink>
                    ))}
                </nav>
            </header>
        </Container>
    );
}

export default Newspaper;
