import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNSAyMkgxNC41TTggMkgxNk0xMiA1VjJNNCAxMkgyME0xNyAxOUwxOC41IDIyTTcgMTlMNS41IDIyTTguNSAxNS41SDguNTFNMTUuNSAxNS41SDE1LjUxTTguOCAxOUgxNS4yQzE2Ljg4MDIgMTkgMTcuNzIwMiAxOSAxOC4zNjIgMTguNjczQzE4LjkyNjUgMTguMzg1NCAxOS4zODU0IDE3LjkyNjUgMTkuNjczIDE3LjM2MkMyMCAxNi43MjAyIDIwIDE1Ljg4MDIgMjAgMTQuMlY5LjhDMjAgOC4xMTk4NCAyMCA3LjI3OTc2IDE5LjY3MyA2LjYzODAzQzE5LjM4NTQgNi4wNzM1NCAxOC45MjY1IDUuNjE0NiAxOC4zNjIgNS4zMjY5OEMxNy43MjAyIDUgMTYuODgwMiA1IDE1LjIgNUg4LjhDNy4xMTk4NCA1IDYuMjc5NzYgNSA1LjYzODAzIDUuMzI2OThDNS4wNzM1NCA1LjYxNDYgNC42MTQ2IDYuMDczNTQgNC4zMjY5OCA2LjYzODAzQzQgNy4yNzk3NiA0IDguMTE5ODQgNCA5LjhWMTQuMkM0IDE1Ljg4MDIgNCAxNi43MjAyIDQuMzI2OTggMTcuMzYyQzQuNjE0NiAxNy45MjY1IDUuMDczNTQgMTguMzg1NCA1LjYzODAzIDE4LjY3M0M2LjI3OTc2IDE5IDcuMTE5ODQgMTkgOC44IDE5Wk05IDE1LjVDOSAxNS43NzYxIDguNzc2MTQgMTYgOC41IDE2QzguMjIzODYgMTYgOCAxNS43NzYxIDggMTUuNUM4IDE1LjIyMzkgOC4yMjM4NiAxNSA4LjUgMTVDOC43NzYxNCAxNSA5IDE1LjIyMzkgOSAxNS41Wk0xNiAxNS41QzE2IDE1Ljc3NjEgMTUuNzc2MSAxNiAxNS41IDE2QzE1LjIyMzkgMTYgMTUgMTUuNzc2MSAxNSAxNS41QzE1IDE1LjIyMzkgMTUuMjIzOSAxNSAxNS41IDE1QzE1Ljc3NjEgMTUgMTYgMTUuMjIzOSAxNiAxNS41WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const TrainIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M9.5 22H14.5M8 2H16M12 5V2M4 12H20M17 19L18.5 22M7 19L5.5 22M8.5 15.5H8.51M15.5 15.5H15.51M8.8 19H15.2C16.8802 19 17.7202 19 18.362 18.673C18.9265 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V9.8C20 8.11984 20 7.27976 19.673 6.63803C19.3854 6.07354 18.9265 5.6146 18.362 5.32698C17.7202 5 16.8802 5 15.2 5H8.8C7.11984 5 6.27976 5 5.63803 5.32698C5.07354 5.6146 4.6146 6.07354 4.32698 6.63803C4 7.27976 4 8.11984 4 9.8V14.2C4 15.8802 4 16.7202 4.32698 17.362C4.6146 17.9265 5.07354 18.3854 5.63803 18.673C6.27976 19 7.11984 19 8.8 19ZM9 15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5C8 15.2239 8.22386 15 8.5 15C8.77614 15 9 15.2239 9 15.5ZM16 15.5C16 15.7761 15.7761 16 15.5 16C15.2239 16 15 15.7761 15 15.5C15 15.2239 15.2239 15 15.5 15C15.7761 15 16 15.2239 16 15.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

TrainIcon.displayName = 'TrainIcon';
