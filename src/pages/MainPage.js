import React from 'react';
import List from './List';
// import Edit from './Edit';
import Recipe from './Recipe';

class MainPage extends React.Component {

  // Set state on init to have a recipe list equal to localStorage.recipes
  constructor(props) {
    super(props);
    this.state = { recipes: JSON.parse(localStorage.recipes),
                   view: null,
                   recipeIndex: null };
    this.renderRecipe = this.renderRecipe.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }
  // Create an update method that writes recipes from state to localStorage.recipes

  addRecipe(recipe) {
    const newRecipes = this.state.recipes.concat(recipe);
    this.setState({ recipes: newRecipes });
  }

  renderRecipe(index) {
    this.setState({
      view: 'Recipe',
      recipeIndex: index });
  }

  render() {
    return (
            <div>
                <h1>Recipe Box v0.0.1</h1>
                <List recipes = {this.state.recipes}
                  recClick = {this.renderRecipe}
                />
                {this.state.view === 'Edit' ? <Edit options = {this.state.recipeIndex} /> : null}
                {this.state.view === 'Recipe' ? <Recipe name = {this.state.recipes[this.state.recipeIndex].name}
                  ingredients = {this.state.recipes[this.state.recipeIndex].ingredients}
                /> : null}
            </div>
        );
  }
}

MainPage.propTypes = {
  children: React.PropTypes.node,
};

export default MainPage;
