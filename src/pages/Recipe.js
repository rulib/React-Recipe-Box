import React from 'react';

class Recipe extends React.Component {

  handleClick() {
    this.props.editClick(this.props.index);
  }
  render() {
    console.log(this.props);
    const ingredientsList = this.props.ingredients.map((ingredient, index) => {
      return <p key = {index}> {ingredient}</p>
    });

    return (
            <div className = "recipe">
                <h2>Recipe Card</h2>
                <h3>{this.props.name}</h3>
                {ingredientsList}
                <button onClick={() => this.handleClick()}>Edit</button>
            </div>
        );
  }
}

Recipe.propTypes = {
  children: React.PropTypes.node,
};

export default Recipe;
