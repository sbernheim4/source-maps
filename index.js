'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var libA = require('./lib-a');
var libB = require('./lib-b');

var CommentBox = React.createClass({
  displayName: 'CommentBox',


  render: function render() {
    console.log("TESTING>>>>>>>>>>>>");
    return React.createElement(
      'div',
      { className: 'commentBox' },
      'Hello, world! I am a CommentBox.'
    );
  }
});

libA.test();
libB.test();

ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
//# sourceMappingURL=index.js.map