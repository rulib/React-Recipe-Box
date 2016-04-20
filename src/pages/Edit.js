import React from 'react';

class Edit extends React.Component {
  render() {
  console.log(this.props);
    return (
            <div>
                <h2>Edit Recipe</h2>
                <p>{this.props.name}</p>
                <p>{this.props.ingredients}</p>
            </div>
        );
  }
}

Edit.propTypes = {
  children: React.PropTypes.node,
};

export default Edit;
