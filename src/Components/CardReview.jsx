import React, { useContext, useState } from "react";
import "../Styles/Reviews.css";
import Mycxt from './Context';

function CardReview() {
  const customerReviews = useContext(Mycxt);
  const [review, setReview] = useState(0);

  const backBtnClick = () => {
    setReview(review <= 0 ? customerReviews.length - 1 : review - 1);
  };

  const frontBtnClick = () => {
    setReview(review >= customerReviews.length - 1 ? 0 : review + 1);
  };

  const { name, location, message } = customerReviews[review];

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-title">
          Plus de <span className="rw-text-num">1500+ clients</span>
        </p>

        <p className="rw-text-desc">Ne nous croyez pas, vérifiez les témoignages des clients</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{message}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{name}</p>
            <p className="rw-reviewer-place">{location}</p>
          </div>

          <div className="rw-btns">
            <button className="rw-next-btn" type="button" onClick={backBtnClick}>
              ←
            </button>
            <button className="rw-next-btn" type="button" onClick={frontBtnClick}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardReview;
