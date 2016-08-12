let React = require('react');

let About = (props) => {
  return (
    <div className="text-center page-title">
      <h1>About</h1>
      <p>Weather application built on react.</p>
      <p>
        <a href="https://github.com/brinnpaul/reactweatherdemo">github</a>
      </p>
    </div>
  );
}

module.exports = About;
