"use client";
import { CONTACTS, SOCIALMEDIA } from "@/utilities/data";
import Logo from "../logo";
import { Wrapper } from "./style";

interface PropsType {
  id: string;
}

export default function Footer({ id }: PropsType) {
  return (
    <Wrapper id={id}>
      <div className="main__container">
        <div className="contacts">
          <Logo />
          {CONTACTS.map(({ id, title, phone }) => (
            <p key={id}>
              {title}: <span>{phone}</span>
            </p>
          ))}
        </div>

        <div className="social__media">
          {SOCIALMEDIA.map(({ id, Icon, href }) => (
            <a href={href} key={id}>
              <Icon color="#fff" size={24} />
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
