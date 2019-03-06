import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
class AuthorList extends Component {
  render() {
    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">
            <AuthorCard
              key={this.props.authors.first_name}
              authors={this.props.authors}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorList;
