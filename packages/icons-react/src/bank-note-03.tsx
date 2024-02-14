import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0IDlIMTEuNUMxMC42NzE2IDkgMTAgOS42NzE1NyAxMCAxMC41QzEwIDExLjMyODQgMTAuNjcxNiAxMiAxMS41IDEySDEyLjVDMTMuMzI4NCAxMiAxNCAxMi42NzE2IDE0IDEzLjVDMTQgMTQuMzI4NCAxMy4zMjg0IDE1IDEyLjUgMTVIMTBNMTIgOFY5TTEyIDE1VjE2TTE4IDEySDE4LjAxTTYgMTJINi4wMU0yIDguMkwyIDE1LjhDMiAxNi45MjAxIDIgMTcuNDgwMiAyLjIxNzk5IDE3LjkwOEMyLjQwOTczIDE4LjI4NDMgMi43MTU2OSAxOC41OTAzIDMuMDkyMDIgMTguNzgyQzMuNTE5ODQgMTkgNC4wNzk4OSAxOSA1LjIgMTlMMTguOCAxOUMxOS45MjAxIDE5IDIwLjQ4MDIgMTkgMjAuOTA4IDE4Ljc4MkMyMS4yODQzIDE4LjU5MDMgMjEuNTkwMyAxOC4yODQzIDIxLjc4MiAxNy45MDhDMjIgMTcuNDgwMiAyMiAxNi45MjAxIDIyIDE1LjhWOC4yQzIyIDcuMDc5OSAyMiA2LjUxOTg0IDIxLjc4MiA2LjA5MjAyQzIxLjU5MDMgNS43MTU3IDIxLjI4NDMgNS40MDk3NCAyMC45MDggNS4yMTc5OUMyMC40ODAyIDUgMTkuOTIwMSA1IDE4LjggNUw1LjIgNUM0LjA3OTkgNSAzLjUxOTg0IDUgMy4wOTIwMiA1LjIxNzk5QzIuNzE1NyA1LjQwOTczIDIuNDA5NzMgNS43MTU2OSAyLjIxNzk5IDYuMDkyMDJDMiA2LjUxOTg0IDIgNy4wNzk4OSAyIDguMlpNMTguNSAxMkMxOC41IDEyLjI3NjEgMTguMjc2MSAxMi41IDE4IDEyLjVDMTcuNzIzOSAxMi41IDE3LjUgMTIuMjc2MSAxNy41IDEyQzE3LjUgMTEuNzIzOSAxNy43MjM5IDExLjUgMTggMTEuNUMxOC4yNzYxIDExLjUgMTguNSAxMS43MjM5IDE4LjUgMTJaTTYuNSAxMkM2LjUgMTIuMjc2MSA2LjI3NjE0IDEyLjUgNiAxMi41QzUuNzIzODYgMTIuNSA1LjUgMTIuMjc2MSA1LjUgMTJDNS41IDExLjcyMzkgNS43MjM4NiAxMS41IDYgMTEuNUM2LjI3NjE0IDExLjUgNi41IDExLjcyMzkgNi41IDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const BankNote03Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M14 9H11.5C10.6716 9 10 9.67157 10 10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15H10M12 8V9M12 15V16M18 12H18.01M6 12H6.01M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2ZM18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12ZM6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BankNote03Icon.displayName = 'BankNote03Icon';
