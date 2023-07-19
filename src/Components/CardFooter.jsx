import React from 'react';

const CardFooter = ({ courseType, courseProgressStatus }) => {
  if (
    (courseType === 'On-Demand' || courseType === 'Instructor-Led') &&
    courseProgressStatus === 'In Progress'
  ) {
    return (
      <div>
        <button>
          Start Now <i className="arrow-icon">▶</i>
        </button>
      </div>
    );
  }

  if (courseProgressStatus === 'Completed') {
    return (
      <div>
        <p>Rate this course</p>
        <div className="hollow-star-icon">☆</div>
      </div>
    );
  }

  return null;
};

export default CardFooter;
