import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroCarousel } from '../components/HeroCarousel';
import { AppProvider } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

// Mock matchMedia for framer-motion useReducedMotion hook
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('HeroCarousel component', () => {
  it('should render the carousel slides and navigation pagination dots', () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <HeroCarousel />
        </BrowserRouter>
      </AppProvider>
    );

    // Verify first slide title is visible
    expect(screen.getByText('Smarter Avadi, Stronger Community')).toBeInTheDocument();

    // Verify slide indicators exist
    const dots = screen.getAllByRole('button', { name: /Go to slide/i });
    expect(dots.length).toBe(6); // 6 slides in the carousel
  });
});
