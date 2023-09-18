import "./style.css";
import Image from "next/image";
import {
  communityLogos,
  inKindSponsors,
  platinumLogos,
  silverLogos,
} from "@/utilities/data";

interface PropsType {
  id: string;
}

export default function Support({ id }: PropsType) {
  return (
    <>
      <section className="organizationAndSupport" id={id}>
        <div className="partners">
          <ul>
            <strong>Platinum</strong>
            <li>
              {platinumLogos.map(({ id, src, alt }) => (
                <Image key={id} src={src} alt={alt} />
              ))}
            </li>
          </ul>

          <ul>
            <strong>Silver</strong>
            <li id="sliverimg">
              {silverLogos.map(({ id, src, alt }) => (
                <Image key={id} src={src} alt={alt} />
              ))}
            </li>
          </ul>

          <ul>
            <strong>In-kind sponsors</strong>
            <li id="inGit">
              {inKindSponsors.map(({ id, src, alt }) => (
                <Image key={id} src={src} alt={alt} />
              ))}
            </li>
          </ul>
        </div>

        <div className="comunity">
          <ul>
            <strong>Community</strong>
            <li>
              {communityLogos.map(({ id, src, alt }) => (
                <Image key={id} src={src} alt={alt} />
              ))}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
