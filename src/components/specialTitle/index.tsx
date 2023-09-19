import { Wrapper } from "./style";

interface PropsType {
  content: string;
  className?: string;
}

export function SpecialTitle({ content, className }: PropsType) {
  return (
    <Wrapper className={className && "date"}>
      <span>{"<"}</span>
      {content}
      <span>{"/>"}</span>
    </Wrapper>
  );
}
