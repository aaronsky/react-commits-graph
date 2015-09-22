
React = require('react')
CommitsGraph = require('../')
commits = require('./commits.json');

var selected = null;

function handleClick(commit) {
    console.log(commit);
    selected = commit.sha;
  render(commits);
}

function render(commits) {
  React.render(
    <CommitsGraph
    commits={commits}
    onClick={handleClick}
    selected={selected}
    orientation='horizontal'
    x_step={40}
    y_step={40} />,
    document.getElementById('graph')
    );
}

render(commits);
