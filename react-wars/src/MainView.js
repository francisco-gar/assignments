import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Home from './Home';
import CharacterDetail from './CharacterDetail';

function MainView({ characters }) {
    
    const links = characters.map((character, i) => (
        <Link className='list' key={i} to={{ pathname: `/characters/${i}`, state: character }}>{character.name}</Link>
    ))

    return (
        <div>
            <nav>
            <Link  className='list' to='../'>Home</Link>
                {links}
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/characters/:id"
                    render={({ location: { state } }) => (
                        <CharacterDetail {...state} />
                    )} />
            </Switch>
        </div>
    )
}

export default MainView