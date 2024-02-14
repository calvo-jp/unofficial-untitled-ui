import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDIwLjk5OThIMTNNMi41IDIxLjQ5OThMOC4wNDkyNyAxOS4zNjU1QzguNDA0MjEgMTkuMjI5IDguNTgxNjggMTkuMTYwNyA4Ljc0NzcyIDE5LjA3MTZDOC44OTUyIDE4Ljk5MjQgOS4wMzU4IDE4LjkwMSA5LjE2ODA0IDE4Ljc5ODRDOS4zMTY5MiAxOC42ODI5IDkuNDUxMzcgMTguNTQ4NCA5LjcyMDI4IDE4LjI3OTVMMjEgNi45OTk4MkMyMi4xMDQ2IDUuODk1MjUgMjIuMTA0NiA0LjEwNDM4IDIxIDIuOTk5ODFDMTkuODk1NSAxLjg5NTI1IDE4LjEwNDYgMS44OTUyNCAxNyAyLjk5OTgxTDUuNzIwMjggMTQuMjc5NUM1LjQ1MTM4IDE0LjU0ODQgNS4zMTY5MiAxNC42ODI5IDUuMjAxMzkgMTQuODMxOEM1LjA5ODc3IDE0Ljk2NCA1LjAwNzQgMTUuMTA0NiA0LjkyODIzIDE1LjI1MjFDNC44MzkxMSAxNS40MTgxIDQuNzcwODUgMTUuNTk1NiA0LjYzNDMzIDE1Ljk1MDZMMi41IDIxLjQ5OThaTTIuNSAyMS40OTk4TDQuNTU4MTIgMTYuMTQ4OEM0LjcwNTQgMTUuNzY1OSA0Ljc3OTAzIDE1LjU3NDQgNC45MDUzNCAxNS40ODY3QzUuMDE1NzIgMTUuNDEwMSA1LjE1MjMgMTUuMzgxMSA1LjI4NDMgMTUuNDA2M0M1LjQzNTMzIDE1LjQzNTEgNS41ODAzOCAxNS41ODAyIDUuODcwNDggMTUuODcwM0w4LjEyOTU3IDE4LjEyOTRDOC40MTk2NyAxOC40MTk1IDguNTY0NzIgMTguNTY0NSA4LjU5MzU2IDE4LjcxNTVDOC42MTg3NyAxOC44NDc1IDguNTg5NzkgMTguOTg0MSA4LjUxMzE0IDE5LjA5NDVDOC40MjU0NSAxOS4yMjA4IDguMjMzOTkgMTkuMjk0NCA3Ljg1MTA3IDE5LjQ0MTdMMi41IDIxLjQ5OThaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 */
export const PencilLineIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M21 20.9998H13M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PencilLineIcon.displayName = 'PencilLineIcon';
