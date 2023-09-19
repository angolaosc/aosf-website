import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export default function Root({ children }: PropsType) {
  return <div>{children}</div>;
}
