import React from 'react';
import List from './List';
import Edit from './Edit';
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
    this.renderEdit = this.renderEdit.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
    this.closeWindows = this.closeWindows.bind(this);
  }
  // Create an update method that writes recipes from state to localStorage.recipes

  addRecipe(recipe) {
    const newRecipes = this.state.recipes.concat(recipe);
    this.setState({ recipes: newRecipes });
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  }


  editSubmit(index, title, ingredients) {
    const newRecipe = {
      name: title,
      ingredients,
    };
    if (index || index === 0) {
      console.log("MAINPAGE is handling EDIT SUBMIT");
      const newRecArrayStart = this.state.recipes.slice(0, index);
      const newRecArrayEnd = this.state.recipes.slice((index + 1), (this.state.recipes.length));
      const newRecArray = newRecArrayStart.concat(newRecipe).concat(newRecArrayEnd);
      localStorage.setItem('recipes', JSON.stringify(newRecArray));
      console.log("New recipe array: " + JSON.stringify(newRecArray))
      this.setState({ recipes: newRecArray });
    } else {
      const newRecArray = this.state.recipes.concat(newRecipe);
      this.setState({ recipes: newRecArray });
      localStorage.setItem('recipes', JSON.stringify(newRecArray));
    }
  }

  closeWindows() {
    this.setState({
      view: 'List',
      recipeIndex: null,
      editingRecipe: {} });
  }

  renderEdit(index) {
    const recipe = this.state.recipes[index];
    let editorRecipe = [];
    editorRecipe = editorRecipe.concat(recipe)[0];
    this.setState({
      view: 'Edit',
      editViewSubtype: 'Edit',
      recipeIndex: index,
      editingRecipe: editorRecipe });
  }


  renderRecipe(index) {
    this.setState({
      view: 'Recipe',
      recipeIndex: index });
  }

  render() {
  //  console.log("APP STATE (go neers): " + JSON.stringify(this.state))
  // Add a ternary to handle showing a simple add button
    return (
            <div className = "mainPage">
                <h1>Recipe Box v0.0.1</h1>
                <List recipes = {this.state.recipes}
                  recClick = {this.renderRecipe}
                />
                {this.state.view === 'Edit'
                ? <Edit index = {this.state.recipeIndex}
                  recipe = {this.state.editingRecipe}
                  view = {this.state.editViewSubtype}
                  handleClose = {this.closeWindows}
                  handleSubmit = {this.editSubmit}
                /> : null}
                {this.state.view === 'Recipe'
                ? <Recipe name = {this.state.recipes[this.state.recipeIndex].name}
                  ingredients = {this.state.recipes[this.state.recipeIndex].ingredients}
                  index = {this.state.recipeIndex}
                  editClick = {this.renderEdit}
                />
                : null}
            </div>
        );
  }
}

MainPage.propTypes = {
  children: React.PropTypes.node,
};

export default MainPage;
