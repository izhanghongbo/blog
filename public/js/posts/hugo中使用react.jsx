'use strict';
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        这是一个react按钮
      </button>
    );
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('root')
);