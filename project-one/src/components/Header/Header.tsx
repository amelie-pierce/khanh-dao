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

  const onNavigate = (value: string) => {
    console.log("navigating to", value);
  };

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
          <Chocolate size={32} />
        </span>
        <Navigation />
        <div className="header__right">
          <ShoppingCart />
          <AvatarBadge />
        </div>
      </div>

      <Common.Menu
        open={isShowMenu}
        options={["First Item", "Second Item", "Third Item"]}
        onClose={() => {
          toggleMenu(false);
        }}
        onSelectValue={(value) => {
          onNavigate(value);
        }}
      />
    </>
  );
};

export default Header;
