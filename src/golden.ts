import { css } from 'lit';

export const golden = css`
  :host {
    --golden-ratio: 0.618;
  }

  vaadin-split-layout {
    --vaadin-split-layout-primary-pane-ratio: 0.618;
  }
`;
