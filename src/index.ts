import { css } from 'lit';
import { golden } from './golden.ts';

export const index = css`
  ${golden}

  .align-content-space-around {
    align-content: space-around;
  }

  .align-items-center {
    align-items: center;
  }

  .align-self-center {
    align-self: center;
  }

  .align-self-flex-end {
    align-self: flex-end;
  }

  .flex {
    display: flex;

    &.grow {
      flex-grow: 1;
    }
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .font-weight-100 {
    font-weight: 100;
  }

  .font-weight-200 {
    font-weight: 200;
  }

  .font-weight-300 {
    font-weight: 300;
  }

  .font-weight-400 {
    font-weight: 400;
  }

  .font-weight-500 {
    font-weight: 500;
  }

  .font-weight-600 {
    font-weight: 600;
  }

  .font-weight-700 {
    font-weight: 700;
  }

  .font-weight-800 {
    font-weight: 800;
  }

  .gap {
    gap: 1rem;
  }

  .grid {
    display: grid;
  }

  /** Opinion */
  .flex {
    .center {
      align-items: center;
      justify-content: center;
    }
  }

  .column {
    flex-direction: column;
  }

  .scroll {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-x {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-y {
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:visited {
      color: inherit;
    }
  }

  ul {
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }

  /* Tailwind-like Utilities */
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .p-4 {
    padding: 1rem;
  }
  .m-4 {
    margin: 1rem;
  }
  .text-center {
    text-align: center;
  }
  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .break-all {
    word-break: break-all;
  }
  .box-border {
    box-sizing: border-box;
  }
  .flex-1 {
    flex: 1;
  }
  .min-h-0 {
    min-height: 0;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Added Utilities */
  .relative {
    position: relative;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  [hidden] {
    display: none !important;
  }
`;

export default index;
