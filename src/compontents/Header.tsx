import { PropsWithChildren } from "react";

// interface HeaderType {
//   image: { src: string; alt: string };
//   children: ReactNode;
// }

type HeaderType = PropsWithChildren<{ image: { src: string; alt: string } }>;

const Header = ({ image, children }: HeaderType) => {
  return (
    <div>
      <img {...image} />
      {children}
    </div>
  );
};

export default Header;
