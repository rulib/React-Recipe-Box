import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.recClick(index);
  }

  renderRecipes() {
    const recipes = this.props.recipes;
    return recipes.map((recipe, index) => {
      return (<p key={index} onClick={() => this.handleClick(index)}>
        {recipe.name}
        </p>);
    });
  }


  render() {
    const content = this.renderRecipes();
    return (
            <div className = "list">
                <h2>List of Recipes</h2>
                {content}
            </div>
        );
  }
}


List.propTypes = {
  children: React.PropTypes.node,
};

export default List;
