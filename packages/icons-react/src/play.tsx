import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgNC45ODk1MUM1IDQuMDE4MzUgNSAzLjUzMjc3IDUuMjAyNDkgMy4yNjUxQzUuMzc4ODkgMy4wMzE5MSA1LjY0ODUyIDIuODg3NjEgNS45NDA0IDIuODcwMThDNi4yNzU0NCAyLjg1MDE3IDYuNjc5NDYgMy4xMTk1MyA3LjQ4NzUyIDMuNjU4MjNMMTguMDAzMSAxMC42Njg2QzE4LjY3MDggMTEuMTEzNyAxOS4wMDQ2IDExLjMzNjMgMTkuMTIwOSAxMS42MTY4QzE5LjIyMjcgMTEuODYyMSAxOS4yMjI3IDEyLjEzNzcgMTkuMTIwOSAxMi4zODNDMTkuMDA0NiAxMi42NjM1IDE4LjY3MDggMTIuODg2IDE4LjAwMzEgMTMuMzMxMkw3LjQ4NzUyIDIwLjM0MTVDNi42Nzk0NiAyMC44ODAyIDYuMjc1NDQgMjEuMTQ5NiA1Ljk0MDQgMjEuMTI5NkM1LjY0ODUyIDIxLjExMjIgNS4zNzg4OSAyMC45Njc5IDUuMjAyNDkgMjAuNzM0N0M1IDIwLjQ2NyA1IDE5Ljk4MTQgNSAxOS4wMTAzVjQuOTg5NTFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const PlayIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M5 4.98951C5 4.01835 5 3.53277 5.20249 3.2651C5.37889 3.03191 5.64852 2.88761 5.9404 2.87018C6.27544 2.85017 6.67946 3.11953 7.48752 3.65823L18.0031 10.6686C18.6708 11.1137 19.0046 11.3363 19.1209 11.6168C19.2227 11.8621 19.2227 12.1377 19.1209 12.383C19.0046 12.6635 18.6708 12.886 18.0031 13.3312L7.48752 20.3415C6.67946 20.8802 6.27544 21.1496 5.9404 21.1296C5.64852 21.1122 5.37889 20.9679 5.20249 20.7347C5 20.467 5 19.9814 5 19.0103V4.98951Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PlayIcon.displayName = 'PlayIcon';
