import { CSSResult } from 'lit';
import { describe, expect, it } from 'vitest';
import { index } from '../src/index.ts';

describe('Atomic CSS', () => {
  it('should export a CSSResult named index', () => {
    expect(index).toBeInstanceOf(CSSResult);
  });

  it('should contain basic utility classes', () => {
    const cssText = index.cssText;
    expect(cssText).toContain('.flex');
    expect(cssText).toContain('display: flex');
    expect(cssText).toContain('.grid');
    expect(cssText).toContain('display: grid');
  });

  it('should contain Tailwind-like utility classes', () => {
    const cssText = index.cssText;
    expect(cssText).toContain('.text-center');
    expect(cssText).toContain('text-align: center');
    expect(cssText).toContain('.p-4');
    expect(cssText).toContain('padding: 1rem');
    expect(cssText).toContain('.w-full');
    expect(cssText).toContain('width: 100%');
  });
});
