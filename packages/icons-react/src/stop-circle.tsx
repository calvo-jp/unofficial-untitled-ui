import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIyQzE3LjUyMjggMjIgMjIgMTcuNTIyOCAyMiAxMkMyMiA2LjQ3NzE1IDE3LjUyMjggMiAxMiAyQzYuNDc3MTUgMiAyIDYuNDc3MTUgMiAxMkMyIDE3LjUyMjggNi40NzcxNSAyMiAxMiAyMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04IDkuNkM4IDkuMDM5OTUgOCA4Ljc1OTkyIDguMTA4OTkgOC41NDYwMUM4LjIwNDg3IDguMzU3ODUgOC4zNTc4NSA4LjIwNDg3IDguNTQ2MDEgOC4xMDg5OUM4Ljc1OTkyIDggOS4wMzk5NSA4IDkuNiA4SDE0LjRDMTQuOTYwMSA4IDE1LjI0MDEgOCAxNS40NTQgOC4xMDg5OUMxNS42NDIyIDguMjA0ODcgMTUuNzk1MSA4LjM1Nzg1IDE1Ljg5MSA4LjU0NjAxQzE2IDguNzU5OTIgMTYgOS4wMzk5NSAxNiA5LjZWMTQuNEMxNiAxNC45NjAxIDE2IDE1LjI0MDEgMTUuODkxIDE1LjQ1NEMxNS43OTUxIDE1LjY0MjIgMTUuNjQyMiAxNS43OTUxIDE1LjQ1NCAxNS44OTFDMTUuMjQwMSAxNiAxNC45NjAxIDE2IDE0LjQgMTZIOS42QzkuMDM5OTUgMTYgOC43NTk5MiAxNiA4LjU0NjAxIDE1Ljg5MUM4LjM1Nzg1IDE1Ljc5NTEgOC4yMDQ4NyAxNS42NDIyIDguMTA4OTkgMTUuNDU0QzggMTUuMjQwMSA4IDE0Ljk2MDEgOCAxNC40VjkuNloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const StopCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M8 9.6C8 9.03995 8 8.75992 8.10899 8.54601C8.20487 8.35785 8.35785 8.20487 8.54601 8.10899C8.75992 8 9.03995 8 9.6 8H14.4C14.9601 8 15.2401 8 15.454 8.10899C15.6422 8.20487 15.7951 8.35785 15.891 8.54601C16 8.75992 16 9.03995 16 9.6V14.4C16 14.9601 16 15.2401 15.891 15.454C15.7951 15.6422 15.6422 15.7951 15.454 15.891C15.2401 16 14.9601 16 14.4 16H9.6C9.03995 16 8.75992 16 8.54601 15.891C8.35785 15.7951 8.20487 15.6422 8.10899 15.454C8 15.2401 8 14.9601 8 14.4V9.6Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

StopCircleIcon.displayName = 'StopCircleIcon';
