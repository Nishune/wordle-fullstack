import React from "react";
import { MessageContainer, MessageText } from "../../styles/GameMessageStyles";

function GameMessage({ message }) {
  return (
    <MessageContainer>
      <MessageText variant="h6" color="primary.main">
        {message}
      </MessageText>
    </MessageContainer>
  );
}

export default GameMessage;
