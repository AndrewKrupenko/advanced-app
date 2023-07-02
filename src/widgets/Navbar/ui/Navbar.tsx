import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

// doesn't need async chunk that's why this isn't default export
export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          Main page
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
