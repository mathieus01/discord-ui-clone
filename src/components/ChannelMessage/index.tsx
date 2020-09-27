import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
export { Mention } from './styles'

export interface Props {
  author: string,
  avatar: string,
  date: string,
  content: string | React.ReactElement | React.ReactNode;
  hasMentions?: boolean;
  isBot?: boolean
}

const ChannelMessage: React.FC<Props> = ({
  author,
  avatar,
  date,
  content,
  hasMentions,
  isBot
}) => {
  return (
    <Container className={hasMentions ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''} >
        {avatar !== '' && <img src={avatar} alt="avatar" />}
      </Avatar>

      <Message >
        <Header>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>{content}</Content>
      </Message>
    </Container>
  );
}

export default ChannelMessage;