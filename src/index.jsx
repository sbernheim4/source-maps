var React = require('react')
var ReactDOM = require('react-dom')
var libA = require('./lib-a');
var libB = require('./lib-b');


var CommentBox = React.createClass({

  render: function() {
	console.log("TESTING>>>>>>>>>>>>")
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});


libA.test();
libB.test();

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
