import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNSAxMFYxNE0xMC41IDEwVjE0TTE0LjUgMTBWMTRNMjIgMTNWMTFNNi44IDE4SDE0LjJDMTUuODgwMiAxOCAxNi43MjAyIDE4IDE3LjM2MiAxNy42NzNDMTcuOTI2NSAxNy4zODU0IDE4LjM4NTQgMTYuOTI2NSAxOC42NzMgMTYuMzYyQzE5IDE1LjcyMDIgMTkgMTQuODgwMiAxOSAxMy4yVjEwLjhDMTkgOS4xMTk4NCAxOSA4LjI3OTc2IDE4LjY3MyA3LjYzODAzQzE4LjM4NTQgNy4wNzM1NCAxNy45MjY1IDYuNjE0NiAxNy4zNjIgNi4zMjY5OEMxNi43MjAyIDYgMTUuODgwMiA2IDE0LjIgNkg2LjhDNS4xMTk4NCA2IDQuMjc5NzYgNiAzLjYzODAzIDYuMzI2OThDMy4wNzM1NCA2LjYxNDYgMi42MTQ2IDcuMDczNTQgMi4zMjY5OCA3LjYzODAzQzIgOC4yNzk3NiAyIDkuMTE5ODQgMiAxMC44VjEzLjJDMiAxNC44ODAyIDIgMTUuNzIwMiAyLjMyNjk4IDE2LjM2MkMyLjYxNDYgMTYuOTI2NSAzLjA3MzU0IDE3LjM4NTQgMy42MzgwMyAxNy42NzNDNC4yNzk3NiAxOCA1LjExOTg0IDE4IDYuOCAxOFoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const BatteryFullIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M6.5 10V14M10.5 10V14M14.5 10V14M22 13V11M6.8 18H14.2C15.8802 18 16.7202 18 17.362 17.673C17.9265 17.3854 18.3854 16.9265 18.673 16.362C19 15.7202 19 14.8802 19 13.2V10.8C19 9.11984 19 8.27976 18.673 7.63803C18.3854 7.07354 17.9265 6.6146 17.362 6.32698C16.7202 6 15.8802 6 14.2 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BatteryFullIcon.displayName = 'BatteryFullIcon';
