import React, {Component} from 'react';

import Grid from './Grid';
import Buttons from './Buttons';

class Platform extends Component {
    constructor(){
        super();
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
        this.handleSmallTime = this.handleSmallTime.bind(this);
        this.handleParty = this.handleParty.bind(this);
        this.handleBlueOne = this.handleBlueOne.bind(this);
        this.handleBlueTwo = this.handleBlueTwo.bind(this);
        this.handleGreatOne = this.handleGreatOne.bind(this);
        // this.handleGreatTwo = this.handleGreatTwo.bind(this);
        // this.handleGreatThree = this.handleGreatThree.bind(this);
        // this.handleGreatFour = this.handleGreatFour.bind(this);
    }
    handleBlueOne(){
        this.setState(ps => ({
            colors: [ps.colors, ps.colors, 'blue', ps.colors]
        }))
    }
    handleBlueTwo(){
        this.setState(ps => ({
            colors: [ps.colors, ps.colors, ps.colors, 'blue']
        }))
    }

    handleSmallTime(){
        this.setState(ps => ({
            colors: ps.colors.every(color => color === 'black') ? 
            ps.colors.map(color => 'white')
            : ps.colors.map(color  => 'black')
        }))
    }

    handleParty(){
        this.setState(ps => ({
            colors: ps.colors.map((color, i) => i < ps.colors.length / 2 ? 'purple' : color)
        }))
    }

    handleGreatOne(){
        this.setState(ps => ({
            colors: ['pink', ps.colors, ps.colors, ps.colors]
        }))
    }

    render() {
        const { colors } = this.state;
        return (
            <div className='wrapper'>
                <Grid colors={colors} />
                <Buttons handleSmallTime={this.handleSmallTime} handleParty={this.handleParty} handleBlueOne={this.handleBlueOne} handleBlueTwo={this.handleBlueTwo} handleGreatOne={this.handleGreatOne} />
            </div>
        )
    }
}

export default Platform;