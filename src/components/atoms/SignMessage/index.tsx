import React from "react";

import { Answer, MessageWrap, Question } from "./styles";

interface Props {
  question: string;
  answer: string;
  onClick: (e) => void;
}

function SignMessage({ question, answer, onClick }: Props): React.ReactElement {
  return (
    <MessageWrap>
      <Question>{question}</Question>
      <Answer onClick={onClick}>{answer}</Answer>
    </MessageWrap>
  );
}

export default SignMessage;
