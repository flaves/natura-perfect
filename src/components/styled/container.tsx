import React from 'react';
import styled from '@emotion/styled';

import mq from '../../styles/mq';

const Container = styled.div`
  padding: 0 20px;

  ${mq(`md`)} {
    padding: 0 100px;
  }
`;

export default React.memo(Container);
