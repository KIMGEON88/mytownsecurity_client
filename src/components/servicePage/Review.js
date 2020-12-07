import React, { useState } from 'react';
import ReviewList from './ReviewList';
import styled from 'styled-components';

const ReviewTemplateBlock = styled.div`
width: 512px;
height: 768px;

position: absolute; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
background: white;
border-radius: 16px;
box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

margin-top: 96px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
  }
`;

const Input = styled.button`
  flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #c5f6fa;
`;

const Button = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #22b8cf;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const reviewButton = ({ text }) => {
  return <Button>{text}</Button>;
};

const Review = ({ data }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);
  const onCreate = () => {};
  const onKeyPress = () => {};

  return (
    <>
      <ReviewTemplateBlock>
        <input
          className=''
          autoFocus
          onChange={onChange}
          value={value}
          placeholder='리뷰를 등록하세요'
          width='250px'
        ></input>

        <span>
          <reviewButton>입력</reviewButton>
        </span>
      </ReviewTemplateBlock>

      {/* <div className='review-list'>
        {data.map((data) => (
          <ReviewListEntry />
        ))}
      </div> */}
    </>
  );
};

export default Review;
