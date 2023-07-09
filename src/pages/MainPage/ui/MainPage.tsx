import { useTranslation } from 'react-i18next';

import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
};

export default MainPage;
