"use client";
import { Wrapper } from "./style";

interface PropsType {
  content: string;
  className?: string;
  id: number;
  onClick: () => void;
}

export function Button({ content, className, id, onClick }: PropsType) {
  return (
    <Wrapper
      className={className && "hackathon"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id + 1.4 }}
      onClick={() => onClick()}
    >
      {content}
    </Wrapper>
  );
}
