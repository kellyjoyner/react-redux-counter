import React, { PropTypes } from 'react'

class Counter extends React.Component {
  render() {
    const { value, increment, decrement, incrementIfOdd, incrementIfEven, incrementAsync } = this.props;
    return (
      <p>
        Clicked: {value} times
        <br />
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        <br />
        <button onClick={incrementIfOdd}>
          Increment if odd
        </button>
        <br />
        <button onClick={incrementIfEven}>
          Increment if even
        </button>
        <br />
        <button onClick={incrementAsync}>
          Async Increment
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementIfEven: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired
};

export default Counter