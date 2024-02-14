import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjUgOFYxNi4yQzIwLjUgMTcuODgwMiAyMC41IDE4LjcyMDIgMjAuMTczIDE5LjM2MkMxOS44ODU0IDE5LjkyNjUgMTkuNDI2NSAyMC4zODU0IDE4Ljg2MiAyMC42NzNDMTguMjIwMiAyMSAxNy4zODAyIDIxIDE1LjcgMjFIOC4zQzYuNjE5ODQgMjEgNS43Nzk3NiAyMSA1LjEzODAzIDIwLjY3M0M0LjU3MzU0IDIwLjM4NTQgNC4xMTQ2IDE5LjkyNjUgMy44MjY5OCAxOS4zNjJDMy41IDE4LjcyMDIgMy41IDE3Ljg4MDIgMy41IDE2LjJWOE0zLjYgM0gyMC40QzIwLjk2MDEgMyAyMS4yNDAxIDMgMjEuNDU0IDMuMTA4OTlDMjEuNjQyMiAzLjIwNDg3IDIxLjc5NTEgMy4zNTc4NSAyMS44OTEgMy41NDYwMUMyMiAzLjc1OTkyIDIyIDQuMDM5OTUgMjIgNC42VjYuNEMyMiA2Ljk2MDA1IDIyIDcuMjQwMDggMjEuODkxIDcuNDUzOTlDMjEuNzk1MSA3LjY0MjE1IDIxLjY0MjIgNy43OTUxMyAyMS40NTQgNy44OTEwMUMyMS4yNDAxIDggMjAuOTYwMSA4IDIwLjQgOEgzLjZDMy4wMzk5NSA4IDIuNzU5OTIgOCAyLjU0NjAxIDcuODkxMDFDMi4zNTc4NSA3Ljc5NTEzIDIuMjA0ODcgNy42NDIxNSAyLjEwODk5IDcuNDUzOTlDMiA3LjI0MDA4IDIgNi45NjAwNSAyIDYuNFY0LjZDMiA0LjAzOTk1IDIgMy43NTk5MiAyLjEwODk5IDMuNTQ2MDFDMi4yMDQ4NyAzLjM1Nzg1IDIuMzU3ODUgMy4yMDQ4NyAyLjU0NjAxIDMuMTA4OTlDMi43NTk5MiAzIDMuMDM5OTUgMyAzLjYgM1pNOS42IDExLjVIMTQuNEMxNC45NjAxIDExLjUgMTUuMjQwMSAxMS41IDE1LjQ1NCAxMS42MDlDMTUuNjQyMiAxMS43MDQ5IDE1Ljc5NTEgMTEuODU3OCAxNS44OTEgMTIuMDQ2QzE2IDEyLjI1OTkgMTYgMTIuNTM5OSAxNiAxMy4xVjEzLjlDMTYgMTQuNDYwMSAxNiAxNC43NDAxIDE1Ljg5MSAxNC45NTRDMTUuNzk1MSAxNS4xNDIyIDE1LjY0MjIgMTUuMjk1MSAxNS40NTQgMTUuMzkxQzE1LjI0MDEgMTUuNSAxNC45NjAxIDE1LjUgMTQuNCAxNS41SDkuNkM5LjAzOTk1IDE1LjUgOC43NTk5MiAxNS41IDguNTQ2MDEgMTUuMzkxQzguMzU3ODUgMTUuMjk1MSA4LjIwNDg3IDE1LjE0MjIgOC4xMDg5OSAxNC45NTRDOCAxNC43NDAxIDggMTQuNDYwMSA4IDEzLjlWMTMuMUM4IDEyLjUzOTkgOCAxMi4yNTk5IDguMTA4OTkgMTIuMDQ2QzguMjA0ODcgMTEuODU3OCA4LjM1Nzg1IDExLjcwNDkgOC41NDYwMSAxMS42MDlDOC43NTk5MiAxMS41IDkuMDM5OTUgMTEuNSA5LjYgMTEuNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const BoxIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M20.5 8V16.2C20.5 17.8802 20.5 18.7202 20.173 19.362C19.8854 19.9265 19.4265 20.3854 18.862 20.673C18.2202 21 17.3802 21 15.7 21H8.3C6.61984 21 5.77976 21 5.13803 20.673C4.57354 20.3854 4.1146 19.9265 3.82698 19.362C3.5 18.7202 3.5 17.8802 3.5 16.2V8M3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V6.4C22 6.96005 22 7.24008 21.891 7.45399C21.7951 7.64215 21.6422 7.79513 21.454 7.89101C21.2401 8 20.9601 8 20.4 8H3.6C3.03995 8 2.75992 8 2.54601 7.89101C2.35785 7.79513 2.20487 7.64215 2.10899 7.45399C2 7.24008 2 6.96005 2 6.4V4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3ZM9.6 11.5H14.4C14.9601 11.5 15.2401 11.5 15.454 11.609C15.6422 11.7049 15.7951 11.8578 15.891 12.046C16 12.2599 16 12.5399 16 13.1V13.9C16 14.4601 16 14.7401 15.891 14.954C15.7951 15.1422 15.6422 15.2951 15.454 15.391C15.2401 15.5 14.9601 15.5 14.4 15.5H9.6C9.03995 15.5 8.75992 15.5 8.54601 15.391C8.35785 15.2951 8.20487 15.1422 8.10899 14.954C8 14.7401 8 14.4601 8 13.9V13.1C8 12.5399 8 12.2599 8.10899 12.046C8.20487 11.8578 8.35785 11.7049 8.54601 11.609C8.75992 11.5 9.03995 11.5 9.6 11.5Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BoxIcon.displayName = 'BoxIcon';
