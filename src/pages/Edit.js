import React from 'react';

// ONLY use this.state to track text input

class Edit extends React.Component {
  constructor(props) {
    super(props);
    let nameVar = this.props.recipe.name ? this.props.recipe.name : ''
    let recVar = this.props.recipe.name ? this.props.recipe.ingredients : ''
    this.state = { name: nameVar,
                   recipe: recVar,
                 };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
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
    // console.log('Default Close Prevented');
    this.props.handleClose();
  }

  render() {
    // console.log(`Editor properties: ${JSON.stringify(this.state)}`);
    return (
            <div className = "edit">
                <h2>{this.props.view} Recipe</h2>
                <form className = "editForm"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    type="text"
                    placeholder={this.props.recipe.name
                      ? this.props.recipe.name
                      : 'New Recipe!'}
                    onChange={this.handleNameChange}
                  /> <br />
                  <input
                    type="text"
                    placeholder={this.props.recipe.ingredients
                      ? this.props.recipe.ingredients
                      : 'Enter comma-separated ingredients!'}
                    onChange={this.handleIngredientsChange}
                  /> <br />
                  <div className = "bttn"
                    onClick={this.handleSubmit}
                  >{this.props.view}</div>
                  <div className = "bttn" onClick={this.handleClose}>
                    Cancel
                  </div>
                </form>
            </div>
        );
  }
}

Edit.propTypes = {
  children: React.PropTypes.node,
};

export default Edit;
