import React from 'react';

class Recipe extends React.Component {

  handleClick() {
    this.props.editClick(this.props.index);
  }
  render() {
  console.log(this.props);
    return (
            <div>
                <h2>Recipe Card</h2>
                <p>{this.props.name}</p>
                <p>{this.props.ingredients}</p>
                <h3 onClick={() => this.handleClick()}>Edit</h3>
            </div>
        );
  }
}

Recipe.propTypes = {
  children: React.PropTypes.node,
};

export default Recipe;
