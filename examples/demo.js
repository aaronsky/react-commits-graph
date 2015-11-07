
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
    var style = {strokeWidth: 4,strokeColour: '#0ef',fillColour:'#fff'};
    React.render(
        <CommitsGraph
        commits={commits}
        onClick={handleClick}
        selected={selected}
        orientation='horizontal'
        x_step={40}
        y_step={40}
        selectedStyle={style}
        offsetPos_x={window.innerWidth / 2}
        offsetPos_y={10}
        colours={['#f00','#0f0','#00f','#ff0','#f0f','#0ff','#fff']} />,
        document.getElementById('graph')
        );
}

render(commits);
