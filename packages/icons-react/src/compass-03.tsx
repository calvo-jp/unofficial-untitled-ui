import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIyQzE3LjUyMjggMjIgMjIgMTcuNTIyOCAyMiAxMkMyMiA2LjQ3NzE1IDE3LjUyMjggMiAxMiAyQzYuNDc3MTUgMiAyIDYuNDc3MTUgMiAxMkMyIDE3LjUyMjggNi40NzcxNSAyMiAxMiAyMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNC43MjIxIDguMjY1OTZDMTUuMjEwNyA4LjEwMzEyIDE1LjQ1NDkgOC4wMjE2OSAxNS42MTc0IDguMDc5NjJDMTUuNzU4NyA4LjEzMDAzIDE1Ljg3IDguMjQxMjcgMTUuOTIwNCA4LjM4MjYzQzE1Ljk3ODMgOC41NDUwNyAxNS44OTY5IDguNzg5MzUgMTUuNzM0IDkuMjc3ODlMMTQuMjQ2NSAxMy43NDA1QzE0LjIwMDEgMTMuODc5NyAxNC4xNzY5IDEzLjk0OTIgMTQuMTM3NCAxNC4wMDdDMTQuMTAyNCAxNC4wNTgyIDE0LjA1ODIgMTQuMTAyNCAxNC4wMDcgMTQuMTM3NEMxMy45NDkyIDE0LjE3NjkgMTMuODc5NyAxNC4yMDAxIDEzLjc0MDUgMTQuMjQ2NUw5LjI3Nzg5IDE1LjczNEM4Ljc4OTM1IDE1Ljg5NjkgOC41NDUwNyAxNS45NzgzIDguMzgyNjMgMTUuOTIwNEM4LjI0MTI3IDE1Ljg3IDguMTMwMDMgMTUuNzU4NyA4LjA3OTYyIDE1LjYxNzRDOC4wMjE2OSAxNS40NTQ5IDguMTAzMTIgMTUuMjEwNyA4LjI2NTk2IDE0LjcyMjFMOS43NTM1MSAxMC4yNTk1QzkuNzk5ODkgMTAuMTIwMyA5LjgyMzA4IDEwLjA1MDggOS44NjI2IDkuOTkyOTlDOS44OTc2IDkuOTQxODIgOS45NDE4MiA5Ljg5NzYgOS45OTI5OSA5Ljg2MjZDMTAuMDUwOCA5LjgyMzA4IDEwLjEyMDMgOS43OTk4OSAxMC4yNTk1IDkuNzUzNTFMMTQuNzIyMSA4LjI2NTk2WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const Compass03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7221 8.26596C15.2107 8.10312 15.4549 8.02169 15.6174 8.07962C15.7587 8.13003 15.87 8.24127 15.9204 8.38263C15.9783 8.54507 15.8969 8.78935 15.734 9.27789L14.2465 13.7405C14.2001 13.8797 14.1769 13.9492 14.1374 14.007C14.1024 14.0582 14.0582 14.1024 14.007 14.1374C13.9492 14.1769 13.8797 14.2001 13.7405 14.2465L9.27789 15.734C8.78935 15.8969 8.54507 15.9783 8.38263 15.9204C8.24127 15.87 8.13003 15.7587 8.07962 15.6174C8.02169 15.4549 8.10312 15.2107 8.26596 14.7221L9.75351 10.2595C9.79989 10.1203 9.82308 10.0508 9.8626 9.99299C9.8976 9.94182 9.94182 9.8976 9.99299 9.8626C10.0508 9.82308 10.1203 9.79989 10.2595 9.75351L14.7221 8.26596Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Compass03Icon.displayName = 'Compass03Icon';
