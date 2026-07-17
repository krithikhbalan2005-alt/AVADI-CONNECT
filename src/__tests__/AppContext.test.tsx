import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { AppProvider, useApp } from '../context/AppContext';
import { describe, it, expect } from 'vitest';

const TestComponent = () => {
  const { theme, setTheme, language, setLanguage, t } = useApp();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="lang">{language}</span>
      <span data-testid="translation">{t('appName')}</span>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      <button onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}>Toggle Lang</button>
    </div>
  );
};

describe('AppContext AppProvider', () => {
  it('should initialize with default states and change theme & language correctly', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    );

    // Initial assertions
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('AVADI CONNECT');

    // Toggle theme
    act(() => {
      screen.getByText('Toggle Theme').click();
    });
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    // Toggle language
    act(() => {
      screen.getByText('Toggle Lang').click();
    });
    expect(screen.getByTestId('lang')).toHaveTextContent('ta');
    expect(screen.getByTestId('translation')).toHaveTextContent('ஆவடி கனெக்ட்');
  });
});
