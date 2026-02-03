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
  .inline-flex {
    display: inline-flex;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .min-w-0 {
    min-width: 0;
  }
  .h-screen {
    height: 100vh;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .p-3 {
    padding: 0.75rem;
  }
  .p-6 {
    padding: 1.5rem;
  }
  .px-2\.5 {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }
  .px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .py-0\.5 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .pb-2 {
    padding-bottom: 0.5rem;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-1 {
    margin-top: 0.25rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  .mb-3 {
    margin-bottom: 0.75rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .mb-8 {
    margin-bottom: 2rem;
  }
  .mr-4 {
    margin-right: 1rem;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  .gap-3 {
    gap: 0.75rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .gap-6 {
    gap: 1.5rem;
  }
  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .tracking-wide {
    letter-spacing: 0.08em;
  }
  .leading-relaxed {
    line-height: 1.7;
  }
  .leading-tight {
    line-height: 1.25;
  }
  .text-right {
    text-align: right;
  }
  .italic {
    font-style: italic;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .max-w-none {
    max-width: none;
  }
  .max-w-sm {
    max-width: 24rem;
  }
  .max-w-md {
    max-width: 28rem;
  }
  .max-w-screen-lg {
    max-width: 64rem;
  }
  .border {
    border: 1px solid var(--app-border, #e6e0d6);
  }
  .border-b {
    border-bottom: 1px solid var(--app-border, #e6e0d6);
  }
  .border-gray-100 {
    border-color: #e5e7eb;
  }
  .border-gray-700 {
    border-color: #374151;
  }
  .border-blue-100 {
    border-color: #dbeafe;
  }
  .border-green-100 {
    border-color: #dcfce7;
  }
  .border-red-100 {
    border-color: #fee2e2;
  }
  .rounded {
    border-radius: 0.5rem;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .shadow-sm {
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);
  }
  .text-gray-100 {
    color: #f8fafc;
  }
  .text-gray-400 {
    color: #52606d;
  }
  .text-gray-500 {
    color: var(--app-muted, #52606d);
  }
  .text-gray-600 {
    color: #486581;
  }
  .text-gray-700 {
    color: #334e68;
  }
  .text-gray-800 {
    color: #243b53;
  }
  .text-gray-900 {
    color: var(--app-ink, #1f2933);
  }
  .text-blue-500 {
    color: #2563eb;
  }
  .text-blue-600 {
    color: #1d4ed8;
  }
  .text-blue-700 {
    color: #1e40af;
  }
  .text-blue-800 {
    color: #1e3a8a;
  }
  .text-green-500 {
    color: #15803d;
  }
  .text-green-700 {
    color: #166534;
  }
  .text-red-500 {
    color: #dc2626;
  }
  .text-red-600 {
    color: #b91c1c;
  }
  .text-red-700 {
    color: #991b1b;
  }
  .bg-blue-50 {
    background-color: #eff6ff;
  }
  .bg-green-50 {
    background-color: #f0fdf4;
  }
  .bg-red-50 {
    background-color: #fef2f2;
  }
  .bg-gray-800 {
    background-color: #1f2937;
  }
  .bg-gray-900 {
    background-color: #111827;
  }
  .hover\:text-blue-800:hover {
    color: #1e3a8a;
  }
  .hover\:underline:hover {
    text-decoration: underline;
  }
  .prose {
    line-height: 1.7;
  }
  @media (min-width: 640px) {
    [class~='sm:grid-cols-2'] {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    [class~='sm:grid-cols-[140px_1fr]'] {
      grid-template-columns: 140px 1fr;
    }
    [class~='sm:flex-row'] {
      flex-direction: row;
    }
    [class~='sm:items-center'] {
      align-items: center;
    }
    [class~='sm:justify-between'] {
      justify-content: space-between;
    }
    [class~='sm:gap-x-6'] {
      column-gap: 1.5rem;
    }
    [class~='sm:gap-y-4'] {
      row-gap: 1rem;
    }
    [class~='sm:w-auto'] {
      width: auto;
    }
  }
  [hidden] {
    display: none !important;
  }
`;

export default index;
