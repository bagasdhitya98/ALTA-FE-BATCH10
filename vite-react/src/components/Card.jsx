import React, { Component } from "react";

class Card extends Component {
  render() {
    const { image, title, description, text } = this.props;

    return (
      <div className="card w-60 bg-white shadow-xl mx-10 my-10">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <p className={`${text}`}>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

//----THIS PROPS----//
{
  /* <div className="card w-60 bg-white shadow-xl mx-10 my-10">
<figure>
  <img
    className={`${this.props.size}`}
    src={this.props.image}
    alt="Shoes"
  />
</figure>
<div className="card-body">
  <h2 className="card-title text-black">{this.props.title}</h2>
  <p className={`${this.props.text}`}>{this.props.description}</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Buy Now</button>
  </div>
</div>
</div> */
}
