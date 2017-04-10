import * as React from 'react';
import { createSkeletonProvider, elements as skel } from 'react-pendifier';

import { UserCard } from '../../index';

import { Avatar, Content, FirstName, LastName, Container, Description } from './CardStyledComponents.styles';

const dummyData = {
  card: {
    firstName: '______',
    lastName: '____________',
    description: `
      ____ __________ __________ ___________ ___ _____ _____
      __ _____ __ ________ _____ ____`,
    avatar: ''
  }
};

export interface Props {
  card: UserCard;
}

export const Card: React.StatelessComponent<Props> = ({ card }) => (
  <Container>
    <Avatar src={card.avatar} />
    <Content>
      <FirstName>
        <skel.span>{card.firstName}</skel.span>
      </FirstName>
      <LastName>
        <skel.span>{card.lastName}</skel.span>
      </LastName>
      <Description>{card.description}</Description>
    </Content>
  </Container>
);

const pendingColor = '#bdc3c7';

export default createSkeletonProvider(
  dummyData,
  // Declare pending state if data is undefined
  ({ card }: Props) => card === undefined,
  // Pass down pending style
  {
    style: {
      backgroundColor: pendingColor,
      color: pendingColor,
      borderColor: pendingColor,
    }
  }
)(Card);