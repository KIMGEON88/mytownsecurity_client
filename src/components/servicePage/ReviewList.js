import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ data }) => {
  return (
    <div className='review-list'>
      {data.map((data) => (
        <ReviewListEntry />
      ))}
    </div>
  );
};
export default ReviewList;
