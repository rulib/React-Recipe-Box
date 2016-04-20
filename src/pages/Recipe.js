import React from 'react';

class Recipe extends React.Component {

  handleClick(keyword) {
    if (keyword === 'Edit') {
      this.props.editClick(this.props.index);
    } else if (keyword === 'Delete') {
      this.props.deleteClick(this.props.index);
    } else if (keyword === 'Close') {
      this.props.closeClick();
    } else {return null}
  }
  render() {
    // console.log(this.props);
    const ingredientsList = this.props.ingredients.map((ingredient, index) => {
      return <p key = {index}> {ingredient}</p>
    });

    return (
            <div className = "recipe">
                <h2>Recipe Card</h2>
                <h3>{this.props.name}</h3>
                {ingredientsList}
                <div className = "bttn" onClick={() => this.handleClick('Edit')}>Edit</div>
                <div className = "bttn" onClick={() => this.handleClick('Delete')}>Delete</div>
                <div className = "bttn" onClick={() => this.handleClick('Close')}>Close</div>

            </div>
        );
  }
}

Recipe.propTypes = {
  children: React.PropTypes.node,
};

export default Recipe;
