import * as React from 'react';

/**
 *
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMTZMMTIgMTNNMTIgMTNMMTUgMTZNMTIgMTNWMjBNMjIgOUgyTTUuNSAxOEg1LjJDNC4wNzk5IDE4IDMuNTE5ODQgMTggMy4wOTIwMiAxNy43ODJDMi43MTU2OSAxNy41OTAzIDIuNDA5NzMgMTcuMjg0MyAyLjIxNzk5IDE2LjkwOEMyIDE2LjQ4MDIgMiAxNS45MjAxIDIgMTQuOFY3LjJDMiA2LjA3OTkgMiA1LjUxOTg0IDIuMjE3OTkgNS4wOTIwMkMyLjQwOTczIDQuNzE1NjkgMi43MTU3IDQuNDA5NzMgMy4wOTIwMiA0LjIxNzk5QzMuNTE5ODQgNCA0LjA3OTkgNCA1LjIgNEgxOC44QzE5LjkyMDEgNCAyMC40ODAyIDQgMjAuOTA4IDQuMjE3OTlDMjEuMjg0MyA0LjQwOTc0IDIxLjU5MDMgNC43MTU3IDIxLjc4MiA1LjA5MjAyQzIyIDUuNTE5ODQgMjIgNi4wNzk5IDIyIDcuMlYxNC44QzIyIDE1LjkyMDEgMjIgMTYuNDgwMiAyMS43ODIgMTYuOTA4QzIxLjU5MDMgMTcuMjg0MyAyMS4yODQzIDE3LjU5MDMgMjAuOTA4IDE3Ljc4MkMyMC40ODAyIDE4IDE5LjkyMDEgMTggMTguOCAxOEgxOC41IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K)
 *
 */
export const CreditCardUploadIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
        <path
          d="M9 16L12 13M12 13L15 16M12 13V20M22 9H2M5.5 18H5.2C4.0799 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V7.2C2 6.0799 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.7157 4.40973 3.09202 4.21799C3.51984 4 4.0799 4 5.2 4H18.8C19.9201 4 20.4802 4 20.908 4.21799C21.2843 4.40974 21.5903 4.7157 21.782 5.09202C22 5.51984 22 6.0799 22 7.2V14.8C22 15.9201 22 16.4802 21.782 16.908C21.5903 17.2843 21.2843 17.5903 20.908 17.782C20.4802 18 19.9201 18 18.8 18H18.5"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CreditCardUploadIcon.displayName = 'CreditCardUploadIcon';