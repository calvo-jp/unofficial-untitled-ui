import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk5OCAyMC4yNjMzQzYuOTExODkgMTkuNTE4NSA0LjQ4MTMxIDE3LjA4NzkgMy43MzY2MiAxMy45OTk5TTIwLjI2MzYgMTRDMTkuNTE4OCAxNy4wODc5IDE3LjA4ODMgMTkuNTE4NSAxNC4wMDA0IDIwLjI2MzNNMTQuMDAwMiAzLjczNjU3QzE3LjA4ODIgNC40ODEyOSAxOS41MTg4IDYuOTExOTMgMjAuMjYzNiA5Ljk5OTg5TTMuNzM2ODIgMTBDNC40ODE1MiA2LjkxMTk5IDYuOTEyMiA0LjQ4MTMgMTAuMDAwMiAzLjczNjU3TTMuNiAxNEg0LjRDNC45NjAwNSAxNCA1LjI0MDA4IDE0IDUuNDUzOTkgMTMuODkxQzUuNjQyMTUgMTMuNzk1MSA1Ljc5NTEzIDEzLjY0MjIgNS44OTEwMSAxMy40NTRDNiAxMy4yNDAxIDYgMTIuOTYwMSA2IDEyLjRWMTEuNkM2IDExLjAzOTkgNiAxMC43NTk5IDUuODkxMDEgMTAuNTQ2QzUuNzk1MTMgMTAuMzU3OCA1LjY0MjE1IDEwLjIwNDkgNS40NTM5OSAxMC4xMDlDNS4yNDAwOCAxMCA0Ljk2MDA1IDEwIDQuNCAxMEgzLjZDMy4wMzk5NSAxMCAyLjc1OTkyIDEwIDIuNTQ2MDEgMTAuMTA5QzIuMzU3ODUgMTAuMjA0OSAyLjIwNDg3IDEwLjM1NzggMi4xMDg5OSAxMC41NDZDMiAxMC43NTk5IDIgMTEuMDM5OSAyIDExLjZWMTIuNEMyIDEyLjk2MDEgMiAxMy4yNDAxIDIuMTA4OTkgMTMuNDU0QzIuMjA0ODcgMTMuNjQyMiAyLjM1Nzg1IDEzLjc5NTEgMi41NDYwMSAxMy44OTFDMi43NTk5MiAxNCAzLjAzOTk1IDE0IDMuNiAxNFpNMTkuNiAxNEgyMC40QzIwLjk2MDEgMTQgMjEuMjQwMSAxNCAyMS40NTQgMTMuODkxQzIxLjY0MjIgMTMuNzk1MSAyMS43OTUxIDEzLjY0MjIgMjEuODkxIDEzLjQ1NEMyMiAxMy4yNDAxIDIyIDEyLjk2MDEgMjIgMTIuNFYxMS42QzIyIDExLjAzOTkgMjIgMTAuNzU5OSAyMS44OTEgMTAuNTQ2QzIxLjc5NTEgMTAuMzU3OCAyMS42NDIyIDEwLjIwNDkgMjEuNDU0IDEwLjEwOUMyMS4yNDAxIDEwIDIwLjk2MDEgMTAgMjAuNCAxMEgxOS42QzE5LjAzOTkgMTAgMTguNzU5OSAxMCAxOC41NDYgMTAuMTA5QzE4LjM1NzggMTAuMjA0OSAxOC4yMDQ5IDEwLjM1NzggMTguMTA5IDEwLjU0NkMxOCAxMC43NTk5IDE4IDExLjAzOTkgMTggMTEuNlYxMi40QzE4IDEyLjk2MDEgMTggMTMuMjQwMSAxOC4xMDkgMTMuNDU0QzE4LjIwNDkgMTMuNjQyMiAxOC4zNTc4IDEzLjc5NTEgMTguNTQ2IDEzLjg5MUMxOC43NTk5IDE0IDE5LjAzOTkgMTQgMTkuNiAxNFpNMTEuNiA2SDEyLjRDMTIuOTYwMSA2IDEzLjI0MDEgNiAxMy40NTQgNS44OTEwMUMxMy42NDIyIDUuNzk1MTMgMTMuNzk1MSA1LjY0MjE1IDEzLjg5MSA1LjQ1Mzk5QzE0IDUuMjQwMDggMTQgNC45NjAwNSAxNCA0LjRWMy42QzE0IDMuMDM5OTUgMTQgMi43NTk5MiAxMy44OTEgMi41NDYwMUMxMy43OTUxIDIuMzU3ODUgMTMuNjQyMiAyLjIwNDg3IDEzLjQ1NCAyLjEwODk5QzEzLjI0MDEgMiAxMi45NjAxIDIgMTIuNCAySDExLjZDMTEuMDM5OSAyIDEwLjc1OTkgMiAxMC41NDYgMi4xMDg5OUMxMC4zNTc4IDIuMjA0ODcgMTAuMjA0OSAyLjM1Nzg1IDEwLjEwOSAyLjU0NjAxQzEwIDIuNzU5OTIgMTAgMy4wMzk5NSAxMCAzLjZWNC40QzEwIDQuOTYwMDUgMTAgNS4yNDAwOCAxMC4xMDkgNS40NTM5OUMxMC4yMDQ5IDUuNjQyMTUgMTAuMzU3OCA1Ljc5NTEzIDEwLjU0NiA1Ljg5MTAxQzEwLjc1OTkgNiAxMS4wMzk5IDYgMTEuNiA2Wk0xMS42IDIySDEyLjRDMTIuOTYwMSAyMiAxMy4yNDAxIDIyIDEzLjQ1NCAyMS44OTFDMTMuNjQyMiAyMS43OTUxIDEzLjc5NTEgMjEuNjQyMiAxMy44OTEgMjEuNDU0QzE0IDIxLjI0MDEgMTQgMjAuOTYwMSAxNCAyMC40VjE5LjZDMTQgMTkuMDM5OSAxNCAxOC43NTk5IDEzLjg5MSAxOC41NDZDMTMuNzk1MSAxOC4zNTc4IDEzLjY0MjIgMTguMjA0OSAxMy40NTQgMTguMTA5QzEzLjI0MDEgMTggMTIuOTYwMSAxOCAxMi40IDE4SDExLjZDMTEuMDM5OSAxOCAxMC43NTk5IDE4IDEwLjU0NiAxOC4xMDlDMTAuMzU3OCAxOC4yMDQ5IDEwLjIwNDkgMTguMzU3OCAxMC4xMDkgMTguNTQ2QzEwIDE4Ljc1OTkgMTAgMTkuMDM5OSAxMCAxOS42VjIwLjRDMTAgMjAuOTYwMSAxMCAyMS4yNDAxIDEwLjEwOSAyMS40NTRDMTAuMjA0OSAyMS42NDIyIDEwLjM1NzggMjEuNzk1MSAxMC41NDYgMjEuODkxQzEwLjc1OTkgMjIgMTEuMDM5OSAyMiAxMS42IDIyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const BezierCurve02Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9.9998 20.2633C6.91189 19.5185 4.48131 17.0879 3.73662 13.9999M20.2636 14C19.5188 17.0879 17.0883 19.5185 14.0004 20.2633M14.0002 3.73657C17.0882 4.48129 19.5188 6.91193 20.2636 9.99989M3.73682 10C4.48152 6.91199 6.9122 4.4813 10.0002 3.73657M3.6 14H4.4C4.96005 14 5.24008 14 5.45399 13.891C5.64215 13.7951 5.79513 13.6422 5.89101 13.454C6 13.2401 6 12.9601 6 12.4V11.6C6 11.0399 6 10.7599 5.89101 10.546C5.79513 10.3578 5.64215 10.2049 5.45399 10.109C5.24008 10 4.96005 10 4.4 10H3.6C3.03995 10 2.75992 10 2.54601 10.109C2.35785 10.2049 2.20487 10.3578 2.10899 10.546C2 10.7599 2 11.0399 2 11.6V12.4C2 12.9601 2 13.2401 2.10899 13.454C2.20487 13.6422 2.35785 13.7951 2.54601 13.891C2.75992 14 3.03995 14 3.6 14ZM19.6 14H20.4C20.9601 14 21.2401 14 21.454 13.891C21.6422 13.7951 21.7951 13.6422 21.891 13.454C22 13.2401 22 12.9601 22 12.4V11.6C22 11.0399 22 10.7599 21.891 10.546C21.7951 10.3578 21.6422 10.2049 21.454 10.109C21.2401 10 20.9601 10 20.4 10H19.6C19.0399 10 18.7599 10 18.546 10.109C18.3578 10.2049 18.2049 10.3578 18.109 10.546C18 10.7599 18 11.0399 18 11.6V12.4C18 12.9601 18 13.2401 18.109 13.454C18.2049 13.6422 18.3578 13.7951 18.546 13.891C18.7599 14 19.0399 14 19.6 14ZM11.6 6H12.4C12.9601 6 13.2401 6 13.454 5.89101C13.6422 5.79513 13.7951 5.64215 13.891 5.45399C14 5.24008 14 4.96005 14 4.4V3.6C14 3.03995 14 2.75992 13.891 2.54601C13.7951 2.35785 13.6422 2.20487 13.454 2.10899C13.2401 2 12.9601 2 12.4 2H11.6C11.0399 2 10.7599 2 10.546 2.10899C10.3578 2.20487 10.2049 2.35785 10.109 2.54601C10 2.75992 10 3.03995 10 3.6V4.4C10 4.96005 10 5.24008 10.109 5.45399C10.2049 5.64215 10.3578 5.79513 10.546 5.89101C10.7599 6 11.0399 6 11.6 6ZM11.6 22H12.4C12.9601 22 13.2401 22 13.454 21.891C13.6422 21.7951 13.7951 21.6422 13.891 21.454C14 21.2401 14 20.9601 14 20.4V19.6C14 19.0399 14 18.7599 13.891 18.546C13.7951 18.3578 13.6422 18.2049 13.454 18.109C13.2401 18 12.9601 18 12.4 18H11.6C11.0399 18 10.7599 18 10.546 18.109C10.3578 18.2049 10.2049 18.3578 10.109 18.546C10 18.7599 10 19.0399 10 19.6V20.4C10 20.9601 10 21.2401 10.109 21.454C10.2049 21.6422 10.3578 21.7951 10.546 21.891C10.7599 22 11.0399 22 11.6 22Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BezierCurve02Icon.displayName = 'BezierCurve02Icon';
