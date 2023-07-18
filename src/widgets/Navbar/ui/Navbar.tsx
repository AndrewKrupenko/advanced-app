import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

// doesn't need async chunk that's why this isn't default export
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
          {t('Main page')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.RED}>
          {t('About page')}
        </AppLink>
      </div>
    </div>
  );
};
