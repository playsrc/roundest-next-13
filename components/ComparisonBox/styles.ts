import styled from "styled-components";

export const ComparisonContainer = styled.div`
  position: relative;
  display: flex;
  min-width: 100%;
  justify-content: space-between;

  span {
    position: absolute;
    font-size: 1.125rem;
    margin-bottom: 3rem;
    width: 100%;
    top: 5px;
    text-align: center;
    font-style: italic;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 125px;
    text-transform: capitalize;
    margin: 0 auto;
    text-align: center;
  }

  img {
    border: 2px solid white;
    border-radius: 8px;
    width: 135px;
    height: 135px;
    object-fit: contain;
    image-rendering: pixelated;
  }
`;

export const MyButton = styled.button`
  font-size: 1.25rem;
  padding: 0.75rem;
  background-color: transparent;
  color: white;
  border-radius: 8px;
  border: none;
  border: 2px solid white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* &:not(:disabled):hover {
    opacity: 0.7;
  } */
`;
