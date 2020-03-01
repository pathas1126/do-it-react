import React, { Component } from 'react';

class Counter3 extends Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화
      </div>
    );
  }
}

export default Counter3;
