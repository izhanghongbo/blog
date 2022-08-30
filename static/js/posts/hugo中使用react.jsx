'use strict';

class Text extends React.Component{
  
  render(){
    return <span>这是一个React按钮</span>
  }
}

class LikeButton extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { liked: false };
	}
      
	render() {
	  if (this.state.liked) {
	    return 'You click liked this.';
	  }
      
	  return (
      <div>
        <button onClick={() => this.setState({ liked: true })}>
          <Text></Text>
        </button>
      </div>
	  );
	}
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('root')
);