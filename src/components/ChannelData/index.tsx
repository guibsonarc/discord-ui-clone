import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guibson Arcebispo"
            date="28/10/2000"
            content="Hoje é meu aniversário!"
          />
        ))}
        <ChannelMessage
          author="Felipe Albuquerque"
          date="28/10/2000"
          content={
            <>
              <Mention>@Guibson Arcebispo</Mention>, feliz aniversário!
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
