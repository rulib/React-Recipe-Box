import React from 'react';

class Edit extends React.Component {
  render() {
    return (
            <div>
                <h2>Recipe Editor</h2>
                <form className="recipeForm" onSubmit="this.handleSubmit"
            </div>
        );
  }
}

Edit.propTypes = {
  children: React.PropTypes.node,
};

export default Edit;
