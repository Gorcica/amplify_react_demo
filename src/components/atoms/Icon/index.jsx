import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DeadlineTimeFlameTimeIcon from '../../../Images/deadline-time-flame-time-1.svg';
import RouletteIcon from '../../../Images/rouletteIcon.svg';
import RouletteIcon2 from '../../../Images/rouletteIcon2.svg';
import Trash from '../../../Images/trash.svg';

const iconMap = {
  deadline: DeadlineTimeFlameTimeIcon,
  roulette: RouletteIcon,
  roulette2: RouletteIcon2,
  trash: Trash,
};

const colorMap = {
  primary: '#ff3300',
  gray: '#939ca5',
  lightGray: '#ccd5dc',
  white: '#ffffff',
};

const sizeMap = {
  s: '12px',
  m: '24px',
  l: '32px',
};

const icons = Object.keys(iconMap);
const colors = Object.keys(colorMap);
const sizes = Object.keys(sizeMap);

const StyledIcon = styled.svg`
  color: ${({ color }) => colorMap[color]};
  size: ${({ size }) => sizeMap[size]};
`;

const Icon = ({ icon, size, color, alt, onClick }) => (
  <StyledIcon as={icon} color={color} size={size} onClick={onClick} alt={alt}/>
);

Icon.propTypes = {
  icon: PropTypes.oneOf(icons).isRequired,
  size: PropTypes.oneOf(sizes),
  color: PropTypes.oneOf(colors),
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 'm',
  color: 'gray',
  alt: '',
  onClick: null,
};

export default Icon;

