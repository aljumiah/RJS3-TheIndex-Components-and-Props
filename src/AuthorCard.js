import React, { Component } from "react";

class AuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        {this.props.authors.map(elem => (
          <div className="card">
            <div className="image">
              <img
                className="card-img-top img-fluid"
                src={elem.imageUrl}
                alt={elem.first_name + " " + elem.last_name}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <span>{elem.first_name + " " + elem.last_name}</span>
              </h5>
              <small className="card-text">{elem.books.length} books</small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AuthorCard;
