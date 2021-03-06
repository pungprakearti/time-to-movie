import React, { Component } from 'react'
import Selector from './Selector'
import Graphic from './Graphic'

//vhs covers
import bloodSport from './images/bloodSport.jpg'
import cyborg from './images/cyborg.jpg'
import doubleImpact from './images/doubleImpact.jpg'
import doubleTeam from './images/doubleTeam.jpg'
import hardTarget from './images/hardTarget.jpg'
import kickBoxer from './images/kickBoxer.jpg'
import lionHeart from './images/lionHeart.jpg'
import streetFighter from './images/streetFighter.jpg'
import timeCop from './images/timeCop.jpg'
import univSoldier from './images/universalSoldier.jpg'

export default class TimeToMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 'selector',
      selected: null,
      minutes: null,
      numMovies: null,
      movie: {
        'Blood Sport': { year: 1988, image: bloodSport, duration: 92 },
        Cyborg: { year: 1989, image: cyborg, duration: 86 },
        'Double Impact': { year: 1991, image: doubleImpact, duration: 110 },
        'Double Team': { year: 1997, image: doubleTeam, duration: 93 },
        'Hard Target': { year: 1993, image: hardTarget, duration: 97 },
        Kickboxer: { year: 1989, image: kickBoxer, duration: 97 },
        Lionheart: { year: 1990, image: lionHeart, duration: 108 },
        'Street Fighter': { year: 1994, image: streetFighter, duration: 102 },
        'Time Cop': { year: 1994, image: timeCop, duration: 99 },
        'Universal Soldier': { year: 1992, image: univSoldier, duration: 102 }
      }
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.storeMinutes = this.storeMinutes.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    //
    //calculate number of movies to watch to equal duration entered
    if (
      prevState.minutes !== this.state.minutes &&
      this.state.selected &&
      this.state.minutes > 0
    ) {
      let numMovies =
        this.state.minutes / this.state.movie[this.state.selected].duration

      let area = window.innerWidth * window.innerHeight

      console.log(
        'space per movie is: ',
        (window.innerWidth * window.innerHeight) / numMovies,
        'width of single movie is: ',
        Math.sqrt(area / 2)
      )

      //2h x 1w = area
      //2a x 1a = area
      //2a x a = area
      //2(a^2) = area
      //a^2 = area/2
      //a = sqrt(area/2)

      console.log(
        this.state.minutes / this.state.movie[this.state.selected].duration,
        this.state.selected
      )

      this.setState({ show: 'graphic', numMovies: numMovies })
    }
  }

  handleSelect(title) {
    this.setState({ selected: title })
  }

  storeMinutes(minutes) {
    this.setState({ minutes: minutes })
  }

  render() {
    console.log(window.innerWidth, window.innerHeight)

    return (
      <div className="TimeToMovie__cont">
        {this.state.show === 'selector' ? (
          <Selector
            movie={this.state.movie}
            select={this.handleSelect}
            storeMinutes={this.storeMinutes}
          />
        ) : (
          <Graphic
            movie={this.state.movie[this.state.selected]}
            numMovies={this.state.numMovies}
          />
        )}
      </div>
    )
  }
}
