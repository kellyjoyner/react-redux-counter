import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from './components/counter';
import * as CounterActions from './components/counter/actions';

import './app.css'

class CounterPage extends Component {
  render() {
    const { value, dispatch } = this.props;
    return (
      <div className="counter">
        <Counter
          value={value}
          {...bindActionCreators(CounterActions, dispatch)}
        />
    </div>
    );
  }
}

function select(state) {
  return {
    value: state.value,
    list: state.list
  };
}

export default connect(select)(CounterPage);