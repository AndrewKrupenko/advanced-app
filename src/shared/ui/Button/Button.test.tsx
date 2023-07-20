import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('button is in the document', () => {
    render(<Button>Test</Button>);
    // to use toBeInTheDocument method set up testing-library/jest-dom
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('button has clear class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
