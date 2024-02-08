import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEwVjYuOEMyMCA1LjExOTg0IDIwIDQuMjc5NzYgMTkuNjczIDMuNjM4MDNDMTkuMzg1NCAzLjA3MzU0IDE4LjkyNjUgMi42MTQ2IDE4LjM2MiAyLjMyNjk4QzE3LjcyMDIgMiAxNi44ODAyIDIgMTUuMiAySDguOEM3LjExOTg0IDIgNi4yNzk3NiAyIDUuNjM4MDMgMi4zMjY5OEM1LjA3MzU0IDIuNjE0NiA0LjYxNDYgMy4wNzM1NCA0LjMyNjk4IDMuNjM4MDNDNCA0LjI3OTc2IDQgNS4xMTk4NCA0IDYuOFYxNy4yQzQgMTguODgwMiA0IDE5LjcyMDIgNC4zMjY5OCAyMC4zNjJDNC42MTQ2IDIwLjkyNjUgNS4wNzM1NCAyMS4zODU0IDUuNjM4MDMgMjEuNjczQzYuMjc5NzYgMjIgNy4xMTk4NCAyMiA4LjggMjJIMTAuNU0xOS4yNSAxN1YxNS4yNUMxOS4yNSAxNC4yODM1IDE4LjQ2NjUgMTMuNSAxNy41IDEzLjVDMTYuNTMzNSAxMy41IDE1Ljc1IDE0LjI4MzUgMTUuNzUgMTUuMjVWMTdNMTUuNiAyMUgxOS40QzE5Ljk2MDEgMjEgMjAuMjQwMSAyMSAyMC40NTQgMjAuODkxQzIwLjY0MjIgMjAuNzk1MSAyMC43OTUxIDIwLjY0MjIgMjAuODkxIDIwLjQ1NEMyMSAyMC4yNDAxIDIxIDE5Ljk2MDEgMjEgMTkuNFYxOC42QzIxIDE4LjAzOTkgMjEgMTcuNzU5OSAyMC44OTEgMTcuNTQ2QzIwLjc5NTEgMTcuMzU3OCAyMC42NDIyIDE3LjIwNDkgMjAuNDU0IDE3LjEwOUMyMC4yNDAxIDE3IDE5Ljk2MDEgMTcgMTkuNCAxN0gxNS42QzE1LjAzOTkgMTcgMTQuNzU5OSAxNyAxNC41NDYgMTcuMTA5QzE0LjM1NzggMTcuMjA0OSAxNC4yMDQ5IDE3LjM1NzggMTQuMTA5IDE3LjU0NkMxNCAxNy43NTk5IDE0IDE4LjAzOTkgMTQgMTguNlYxOS40QzE0IDE5Ljk2MDEgMTQgMjAuMjQwMSAxNC4xMDkgMjAuNDU0QzE0LjIwNDkgMjAuNjQyMiAxNC4zNTc4IDIwLjc5NTEgMTQuNTQ2IDIwLjg5MUMxNC43NTk5IDIxIDE1LjAzOTkgMjEgMTUuNiAyMVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 *
 */
export const FileLock01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H10.5M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

FileLock01Icon.displayName = 'FileLock01Icon';