import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeCharacterById } from '../actions'

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad:</h4>
        <ul className="list-group">
          {this.props.heroes.map(hero => (
            <li key={hero.id} className="list-group-item">
              <div className="list-item">
                {hero.name}
              </div>
              <div
                className="list-item right-button"
                onClick={() => this.props.removeCharacterById(hero.id)}
              >
                x
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  heroes: state.heroes
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeCharacterById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList)