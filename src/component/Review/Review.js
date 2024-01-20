import React, { useState } from "react";
import { UserData } from "../../StaticData/UserData";
import './Review.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = UserData[index];

  const checkNumber = (number) => {
    if (number > UserData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return UserData.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return checkNumber(nextIndex);
    });
  };
  const pervPerson = () => {
    setIndex((index) => {
      let nextIndex = index - 1;
      return checkNumber(nextIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * UserData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author" style={{color:"var(--clr-grey-5)"}}>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={pervPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
       
    </article>
  );
}

export default Review;
