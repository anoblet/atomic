import { CSSResult } from 'lit';
import { describe, expect, it } from 'vitest';
import { colors } from '../src/tailwind/colors.css.ts';

describe('Atomic Colors', () => {
  it('should export a CSSResult named colors', () => {
    expect(colors).toBeInstanceOf(CSSResult);
  });

  it('should contain color variables', () => {
    const cssText = colors.cssText;
    expect(cssText).toContain('--color-red-500');
    expect(cssText).toContain('--color-blue-500');
    expect(cssText).toContain('--color-slate-900');
    expect(cssText).toContain('--color-black');
    expect(cssText).toContain('--color-white');
  });
});
