import React, { Component } from 'react'
import BuildControls from '../../components/Layout/BuildControls/BuildControls'
import Burger from '../../components/Layout/Burger/Burger'
import Auxx from '../../hoc/Auxx'

class BurgerBuilder extends Component {
    state = {
        ingredinets: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    saladPlusHandler = () => {
        this.setState((prevState) => ({
            ingredinets: {
            ...prevState.ingredinets,
            salad: this.state.ingredinets.salad + 1,
          },
        }));
    };

      saladMinusHandler = () => {
          if(this.state.ingredinets.salad < 1) {
              return
          } else {
            this.setState((prevState) => ({
                ingredinets: {
                ...prevState.ingredinets,
                salad: this.state.ingredinets.salad - 1,
              },
            }));
          }
      };

      baconPlusHandler = () => {
        this.setState((prevState) => ({
            ingredinets: {
            ...prevState.ingredinets,
            bacon: this.state.ingredinets.bacon + 1,
          },
        }));
      };

      baconMinusHandler = () => {
        if(this.state.ingredinets.bacon < 1) {
            return
        } else {
          this.setState((prevState) => ({
              ingredinets: {
              ...prevState.ingredinets,
              bacon: this.state.ingredinets.bacon - 1,
            },
          }));
        }
    };

    cheesePlusHandler = () => {
        this.setState((prevState) => ({
            ingredinets: {
            ...prevState.ingredinets,
            cheese: this.state.ingredinets.cheese + 1,
          },
        }));
      };

    cheeseMinusHandler = () => {
        if(this.state.ingredinets.cheese < 1) {
            return
        } else {
          this.setState((prevState) => ({
              ingredinets: {
              ...prevState.ingredinets,
              cheese: this.state.ingredinets.cheese - 1,
            },
          }));
        }
    };

    meatPlusHandler = () => {
        this.setState((prevState) => ({
            ingredinets: {
            ...prevState.ingredinets,
            meat: this.state.ingredinets.meat + 1,
          },
        }));
      };

    meatMinusHandler = () => {
        if(this.state.ingredinets.meat < 1) {
            return
        } else {
          this.setState((prevState) => ({
              ingredinets: {
              ...prevState.ingredinets,
              meat: this.state.ingredinets.meat - 1,
            },
          }));
        }
    };

    render () {
        return (
            <Auxx>
                <Burger ingredinets = {this.state.ingredinets}/>
                <BuildControls 
                    basic1 = {this.saladPlusHandler}
                    basic2 = {this.saladMinusHandler}
                    basic3 = {this.baconPlusHandler}
                    basic4 = {this.baconMinusHandler}
                    basic5 = {this.cheesePlusHandler}
                    basic6 = {this.cheeseMinusHandler}
                    basic7 = {this.meatPlusHandler}
                    basic8 = {this.meatMinusHandler}
                />
            </Auxx>
        )
    }
}

export default BurgerBuilder