import React from 'react';

class Recipe extends React.Component {
  render() {
  console.log(this.props);
    return (
            <div>
                <h2>Recipe Card</h2>
                <p>{this.props.name}</p>
                <p>{this.props.ingredients}</p>
            </div>
        );
  }
}

Recipe.propTypes = {
  children: React.PropTypes.node,
};

export default Recipe;
