import React from 'react';

// ONLY use this.state to track text input

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.recipe.name,
                   recipe: this.props.recipe.ingredients.join(', '),
                 };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    console.log("EDIT CONSTRUCTOR END")
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleIngredientsChange(event) {
    this.setState({ recipe: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // need a regex to handle initial and final spaces on words in state.recipe
    const recArray = this.state.recipe.split(',');
    this.props.handleSubmit(this.props.index, this.state.name, recArray);
    this.handleClose();
  }

  handleClose(event) {
    if (event) { event.preventDefault(); }
    console.log('Default Close Prevented');
    this.props.handleClose();
  }

  render() {
    console.log(`Editor properties: ${JSON.stringify(this.state)}`);
    return (
            <div className = "edit">
                <h2>{this.props.view} Recipe</h2>
                <form className = "editForm"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="text"
                    placeholder={this.state.name}
                    onChange={this.handleNameChange}
                  /> <br />
                  <input
                    type="text"
                    placeholder={this.state.recipe}
                    onChange={this.handleIngredientsChange}
                  /> <br />
                  <input
                    type="submit"
                    value={this.props.view}
                  />
                  <button onClick={this.handleClose}>
                    Cancel
                  </button>
                </form>
            </div>
        );
  }
}

Edit.propTypes = {
  children: React.PropTypes.node,
};

export default Edit;
