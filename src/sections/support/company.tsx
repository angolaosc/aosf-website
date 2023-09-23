import { ReactNode } from "react";
import { StyleCompany } from "./style";

interface PropsType {
  title: string;
  logo: ReactNode;
}

export function Company({ title, logo }: PropsType) {
  return (
    <StyleCompany>
      <h2>{title}</h2>
      <div>{logo}</div>
    </StyleCompany>
  );
}
