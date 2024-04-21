import styled, { keyframes } from 'styled-components';

const loopSpinKeyFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const size = '24px';

export default styled.span`
  position: absolute;
  inset: 0;
  margin: auto;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  border: 8px solid #ccd5dc;
  border-right-color: transparent;
  animation: ${loopSpinKeyFrame} 1s linear infinite;
`;
