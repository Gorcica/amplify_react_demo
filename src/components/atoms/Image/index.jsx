import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Spinner from '../Spinner';
import FallbackImage from './fallback.inline.svg';

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ loaded }) =>
    !loaded &&
    css`
      background: #f0f3f5;
    `}
`;

const StyledImg = styled.img`
  ${({ error }) =>
    error &&
    css`
      display: none !important;
    `};
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

const StyledLazyLoadImage = styled(LazyLoadImage)`
  ${({ error }) =>
    error &&
    css`
      display: none !important;
    `};
  width: 100%;
  height: 100%;
  object-fit: ${({ objectfit }) => objectfit};
`;

const Image = ({ className = '', src = undefined, alt, objectFit = 'contain', isLazyLoad = false }) => {
  const imgEl = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!imgEl.current) {
      return undefined;
    }
    const onloadListener = () => {
      setLoading(false);
    };
    const onerrorListener = () => {
      setError(true);
    };
    imgEl.current.addEventListener('load', onloadListener);
    imgEl.current.addEventListener('error', onerrorListener);
    imgEl.current.src = src ?? '';
    return () => {
      // todo imgEl.currentがundefinedの時がある
      // メモリリークしてないか確認
      imgEl.current?.removeEventListener('load', onloadListener);
      // eslint-disable-next-line
      imgEl.current?.removeEventListener('error', onerrorListener);
    };
  }, [src]);
  let contents;
  if (!src || error) {
    contents = <FallbackImage />;
  } else if (loading) {
    contents = <Spinner />;
  }
  const loaded = !loading && !error;
  return (
    <Root className={className} loaded={loaded}>
      {contents}
      {src &&
        (isLazyLoad ? (
          <StyledLazyLoadImage
            src={src}
            afterLoad={() => setLoading(false)}
            onError={() => setError(true)}
            alt={alt}
            objectfit={objectFit}
            error={error ? 1 : 0}
          />
        ) : (
          <StyledImg ref={imgEl} alt={alt} objectFit={objectFit} error={error || false} />
        ))}
    </Root>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  objectFit: PropTypes.string,
  isLazyLoad: PropTypes.bool,
};

Image.defaultProps = {
  className: '',
  src: undefined,
  objectFit: 'contain',
  isLazyLoad: false,
};

export default Image;
