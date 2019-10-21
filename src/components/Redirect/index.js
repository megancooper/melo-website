import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

const purple = chroma('#513496').alpha(0.3).css();

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* for IE 9 */
  -webkit-transform: translate(-50%, -50%); /* for Safari */
`;

export default () => {
  window.location.href = `${window.location.origin}/`;
  return <Container>
    <BeatLoader color={purple} />
  </Container>;
};
