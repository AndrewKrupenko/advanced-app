import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface componentRenderOptions {
  route?: string;
}

// for example Sidebar has links but tests don't have some kind of 'decorator'
// prettier-ignore
export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
      ,
    </MemoryRouter>,
  );
}