import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjUgNUgxMS45MzQ0QzE0Ljk4MTYgNSAxNi41MDUzIDUgMTcuMDgzNiA1LjU0NzI5QzE3LjU4MzYgNi4wMjAzNyAxNy44MDUxIDYuNzE3MjggMTcuNjcwMiA3LjM5MjIxQzE3LjUxNCA4LjE3MzAyIDE2LjI3MDEgOS4wNTI4NSAxMy43ODIzIDEwLjgxMjVMOS43MTc3MiAxMy42ODc1QzcuMjI5OSAxNS40NDcxIDUuOTg1OTkgMTYuMzI3IDUuODI5ODQgMTcuMTA3OEM1LjY5NDg2IDE3Ljc4MjcgNS45MTY0MiAxOC40Nzk2IDYuNDE2MzYgMTguOTUyN0M2Ljk5NDc0IDE5LjUgOC41MTgzNiAxOS41IDExLjU2NTYgMTkuNUgxMi41TTggNUM4IDYuNjU2ODUgNi42NTY4NSA4IDUgOEMzLjM0MzE1IDggMiA2LjY1Njg1IDIgNUMyIDMuMzQzMTUgMy4zNDMxNSAyIDUgMkM2LjY1Njg1IDIgOCAzLjM0MzE1IDggNVpNMjIgMTlDMjIgMjAuNjU2OSAyMC42NTY5IDIyIDE5IDIyQzE3LjM0MzEgMjIgMTYgMjAuNjU2OSAxNiAxOUMxNiAxNy4zNDMxIDE3LjM0MzEgMTYgMTkgMTZDMjAuNjU2OSAxNiAyMiAxNy4zNDMxIDIyIDE5WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 *
 */
export const RouteIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M11.5 5H11.9344C14.9816 5 16.5053 5 17.0836 5.54729C17.5836 6.02037 17.8051 6.71728 17.6702 7.39221C17.514 8.17302 16.2701 9.05285 13.7823 10.8125L9.71772 13.6875C7.2299 15.4471 5.98599 16.327 5.82984 17.1078C5.69486 17.7827 5.91642 18.4796 6.41636 18.9527C6.99474 19.5 8.51836 19.5 11.5656 19.5H12.5M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5ZM22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

RouteIcon.displayName = 'RouteIcon';