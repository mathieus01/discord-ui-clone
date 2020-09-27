import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author='Mauricio Nunes'
          avatar='https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118807675_3370415962979188_6853675403339852059_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=ePkzE-lIBkkAX-Xubu9&oh=bf6f2aa4de2242f861552badc194c580&oe=5F985547'
          date='26/09/2020'
          content='ow'
        />
        <ChannelMessage
          author='Mauricio Nunes'
          avatar='https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118807675_3370415962979188_6853675403339852059_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=ePkzE-lIBkkAX-Xubu9&oh=bf6f2aa4de2242f861552badc194c580&oe=5F985547'
          date='26/09/2020'
          content={
            <>
              vamos comer sushi  <Mention>@Matheus Nunes</Mention> ?
            </>
          }
        />
        <ChannelMessage
          author='Siri'
          avatar=''
          date='26/09/2020'
          content='Voce quer que eu crie esse evento ?'
          isBot
        />
      </Messages>

      <InputWrapper >
        <Input placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;