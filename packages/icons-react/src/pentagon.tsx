import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjA2MDUgMi45MzIwM0MxMS4zOTgzIDIuNjg2ODkgMTEuNTY3MiAyLjU2NDMyIDExLjc1MTggMi41MTY5NkMxMS45MTQ4IDIuNDc1MTQgMTIuMDg1OCAyLjQ3NTE0IDEyLjI0ODggMi41MTY5NkMxMi40MzM0IDIuNTY0MzIgMTIuNjAyMyAyLjY4Njg5IDEyLjk0MDEgMi45MzIwM0wyMS4wNTg2IDguODIzOTZDMjEuMzk3IDkuMDY5NTYgMjEuNTY2MyA5LjE5MjM1IDIxLjY2ODYgOS4zNTM1QzIxLjc1ODkgOS40OTU3OSAyMS44MTE5IDkuNjU4NjIgMjEuODIyNCA5LjgyNjg0QzIxLjgzNDQgMTAuMDE3NCAyMS43Njk3IDEwLjIxNjIgMjEuNjQwNCAxMC42MTM4TDE4LjU0MDEgMjAuMTQ0OUMxOC40MTA5IDIwLjU0MjEgMTguMzQ2MyAyMC43NDA3IDE4LjIyNDcgMjAuODg3NkMxOC4xMTczIDIxLjAxNzMgMTcuOTc5IDIxLjExNzggMTcuODIyNCAyMS4xNzk4QzE3LjY0NTEgMjEuMjUgMTcuNDM2MiAyMS4yNSAxNy4wMTg2IDIxLjI1SDYuOTgyMDNDNi41NjQzNyAyMS4yNSA2LjM1NTU0IDIxLjI1IDYuMTc4MjIgMjEuMTc5OEM2LjAyMTY0IDIxLjExNzggNS44ODMyNSAyMS4wMTczIDUuNzc1ODkgMjAuODg3NkM1LjY1NDI5IDIwLjc0MDcgNS41ODk2OSAyMC41NDIxIDUuNDYwNSAyMC4xNDQ5TDIuMzYwMjEgMTAuNjEzOEMyLjIzMDg2IDEwLjIxNjIgMi4xNjYxOSAxMC4wMTc0IDIuMTc4MTcgOS44MjY4NEMyLjE4ODc0IDkuNjU4NjIgMi4yNDE2NiA5LjQ5NTc5IDIuMzMyMDIgOS4zNTM1QzIuNDM0MzQgOS4xOTIzNSAyLjYwMzU1IDkuMDY5NTYgMi45NDE5NiA4LjgyMzk2TDExLjA2MDUgMi45MzIwM1oiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const PentagonIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M11.0605 2.93203C11.3983 2.68689 11.5672 2.56432 11.7518 2.51696C11.9148 2.47514 12.0858 2.47514 12.2488 2.51696C12.4334 2.56432 12.6023 2.68689 12.9401 2.93203L21.0586 8.82396C21.397 9.06956 21.5663 9.19235 21.6686 9.3535C21.7589 9.49579 21.8119 9.65862 21.8224 9.82684C21.8344 10.0174 21.7697 10.2162 21.6404 10.6138L18.5401 20.1449C18.4109 20.5421 18.3463 20.7407 18.2247 20.8876C18.1173 21.0173 17.979 21.1178 17.8224 21.1798C17.6451 21.25 17.4362 21.25 17.0186 21.25H6.98203C6.56437 21.25 6.35554 21.25 6.17822 21.1798C6.02164 21.1178 5.88325 21.0173 5.77589 20.8876C5.65429 20.7407 5.58969 20.5421 5.4605 20.1449L2.36021 10.6138C2.23086 10.2162 2.16619 10.0174 2.17817 9.82684C2.18874 9.65862 2.24166 9.49579 2.33202 9.3535C2.43434 9.19235 2.60355 9.06956 2.94196 8.82396L11.0605 2.93203Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PentagonIcon.displayName = 'PentagonIcon';
