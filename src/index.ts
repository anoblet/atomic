import { css } from 'lit';

export const index = css`
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

  /** Opinion */
  .column {
    flex-direction: column;
  }

  .scroll {
    overflow: auto;
  }

  a {
    color: oklch(0.953 0.051 180.801);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  ul {
    list-style-position: inside;
    margin: 0;
    padding: 0;
  }
`;

export default index;
