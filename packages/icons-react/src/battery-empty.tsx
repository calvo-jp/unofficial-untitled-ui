import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyIDEzVjExTTYuOCAxOEgxNC4yQzE1Ljg4MDIgMTggMTYuNzIwMiAxOCAxNy4zNjIgMTcuNjczQzE3LjkyNjUgMTcuMzg1NCAxOC4zODU0IDE2LjkyNjUgMTguNjczIDE2LjM2MkMxOSAxNS43MjAyIDE5IDE0Ljg4MDIgMTkgMTMuMlYxMC44QzE5IDkuMTE5ODQgMTkgOC4yNzk3NiAxOC42NzMgNy42MzgwM0MxOC4zODU0IDcuMDczNTQgMTcuOTI2NSA2LjYxNDYgMTcuMzYyIDYuMzI2OThDMTYuNzIwMiA2IDE1Ljg4MDIgNiAxNC4yIDZINi44QzUuMTE5ODQgNiA0LjI3OTc2IDYgMy42MzgwMyA2LjMyNjk4QzMuMDczNTQgNi42MTQ2IDIuNjE0NiA3LjA3MzU0IDIuMzI2OTggNy42MzgwM0MyIDguMjc5NzYgMiA5LjExOTg0IDIgMTAuOFYxMy4yQzIgMTQuODgwMiAyIDE1LjcyMDIgMi4zMjY5OCAxNi4zNjJDMi42MTQ2IDE2LjkyNjUgMy4wNzM1NCAxNy4zODU0IDMuNjM4MDMgMTcuNjczQzQuMjc5NzYgMTggNS4xMTk4NCAxOCA2LjggMThaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const BatteryEmptyIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M22 13V11M6.8 18H14.2C15.8802 18 16.7202 18 17.362 17.673C17.9265 17.3854 18.3854 16.9265 18.673 16.362C19 15.7202 19 14.8802 19 13.2V10.8C19 9.11984 19 8.27976 18.673 7.63803C18.3854 7.07354 17.9265 6.6146 17.362 6.32698C16.7202 6 15.8802 6 14.2 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BatteryEmptyIcon.displayName = 'BatteryEmptyIcon';
