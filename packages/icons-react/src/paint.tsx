import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIuOTk5NTUgMTNIMTkuOTk5NU0xMS45OTk1IDMuNUwxMC40OTk1IDJNMTEuNDk5NSAzTDIwLjM2ODIgMTEuODY4NkMyMC43NjQyIDEyLjI2NDYgMjAuOTYyMiAxMi40NjI3IDIxLjAzNjQgMTIuNjkxQzIxLjEwMTYgMTIuODkxOCAyMS4xMDE2IDEzLjEwODIgMjEuMDM2NCAxMy4zMDlDMjAuOTYyMiAxMy41MzczIDIwLjc2NDIgMTMuNzM1NCAyMC4zNjgyIDE0LjEzMTRMMTQuODkzNyAxOS42MDU5QzEzLjcwNTYgMjAuNzkzOSAxMy4xMTE2IDIxLjM4OCAxMi40MjY2IDIxLjYxMDVDMTEuODI0MSAyMS44MDYzIDExLjE3NSAyMS44MDYzIDEwLjU3MjUgMjEuNjEwNUM5Ljg4NzUxIDIxLjM4OCA5LjI5MzQ5IDIwLjc5MzkgOC4xMDU0MyAxOS42MDU5TDQuODkzNjYgMTYuMzk0MUMzLjcwNTYxIDE1LjIwNjEgMy4xMTE1OCAxNC42MTIgMi44ODkwMiAxMy45MjcxQzIuNjkzMjQgMTMuMzI0NSAyLjY5MzI0IDEyLjY3NTUgMi44ODkwMiAxMi4wNzI5QzMuMTExNTggMTEuMzg4IDMuNzA1NjEgMTAuNzkzOSA0Ljg5MzY2IDkuNjA1ODlMMTEuNDk5NSAzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const PaintIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M2.99955 13H19.9995M11.9995 3.5L10.4995 2M11.4995 3L20.3682 11.8686C20.7642 12.2646 20.9622 12.4627 21.0364 12.691C21.1016 12.8918 21.1016 13.1082 21.0364 13.309C20.9622 13.5373 20.7642 13.7354 20.3682 14.1314L14.8937 19.6059C13.7056 20.7939 13.1116 21.388 12.4266 21.6105C11.8241 21.8063 11.175 21.8063 10.5725 21.6105C9.88751 21.388 9.29349 20.7939 8.10543 19.6059L4.89366 16.3941C3.70561 15.2061 3.11158 14.612 2.88902 13.9271C2.69324 13.3245 2.69324 12.6755 2.88902 12.0729C3.11158 11.388 3.70561 10.7939 4.89366 9.60589L11.4995 3Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PaintIcon.displayName = 'PaintIcon';
