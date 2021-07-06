import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Note } from './styles';

interface ISingleStarProps {
  stars: number;
}

export function SingleStar({ stars }: ISingleStarProps) {
  return (
    <Container>
      {stars > 4.5 && <FontAwesome name="star" size={16} color="#ff9000" />}
      {stars < 4.5 && stars > 3 && (
        <FontAwesome name="star-half-empty" size={16} color="#ff9000" />
      )}
      {stars < 3 && <FontAwesome name="star-o" size={16} color="#ff9000" />}

      <Note>{stars}</Note>
    </Container>
  );
}
