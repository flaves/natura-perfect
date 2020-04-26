import React from 'react';
import styled from '@emotion/styled';

import mq from '../../styles/mq';

const Container = styled.div`
  padding: 0 20px;

  ${mq(`lg`)} {
    padding: 0 50px;
  }

  ${mq(`xl`)} {
    padding: 0 100px;
  }
`;

export default React.memo(Container);
