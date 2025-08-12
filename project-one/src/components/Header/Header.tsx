type TOwnProps = {};
import {
  AvatarBadge,
  Chocolate,
  HamburgerMenu,
  ShoppingCart,
} from "@/assets/icons";
import { useState } from "react";
import { Common } from "..";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

const Header = (props: TOwnProps) => {
  const {} = props;
  const [isShowMenu, toggleMenu] = useState<boolean>(false);

  return (
    <>
      <div className="header">
        <div
          className="hamburger-menu"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu((prev) => !prev);
          }}
        >
          <HamburgerMenu />
        </div>
        <span className="main-logo">
          <Chocolate width={40} height={40} />
        </span>
        <Navigation />
        <div className="header__right">
          <ShoppingCart />
          <AvatarBadge />
        </div>
      </div>

      <Common.Menu
        open={isShowMenu}
        options={[
          { text: "First Item", handler: () => {} },
          { text: "Second Item", handler: () => {} },
          { text: "Third Item", handler: () => {} },
        ]}
        onClose={() => {
          toggleMenu(false);
        }}
      ></Common.Menu>
    </>
  );
};

export default Header;
