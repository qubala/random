import React, { Component } from 'react';


import Button from '../Button/Button';
import Display from '../Display/Display';
import './Random.css';

class Random extends Component {

    constructor() {
        super();

        this.state = {
            randomNumber: 10
        }
    }

    generateRandomNumber = () => {
        const newNumber = Math.random();

        this.setState((prevState) => ({
            randomNumber: prevState.randomNumber + newNumber   
        }));
    }

    componentDidMount () {
        this.generateRandomNumber();
    }

    render() {
        return (
        <div className="random-container">
            <Display number={this.state.randomNumber}/>
            <Button generate={this.generateRandomNumber} />
        </div>
        )
    }
}

export default Random;