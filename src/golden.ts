import { css } from 'lit';

/**
 * Shared CSS variables implementing Golden Ratio sizing patterns.
 * Specifically targets vaadin-split-layout to ensure consistent pane ratios.
 */
export const golden = css`
  :host {
    --golden-ratio: 1.618;
  }
`;
