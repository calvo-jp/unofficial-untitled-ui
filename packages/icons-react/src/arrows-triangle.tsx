import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDE5SDE3LjI5NDJDMTkuMTU5NCAxOSAyMC4wOTIgMTkgMjAuNjIxNSAxOC42MDkyQzIxLjA4MzIgMTguMjY4NSAyMS4zNzYzIDE3Ljc0NTkgMjEuNDI2MyAxNy4xNzQzQzIxLjQ4MzYgMTYuNTE4NyAyMC45OTczIDE1LjcyMjkgMjAuMDI0NyAxNC4xMzEzTDE5LjAyNzggMTIuNU02LjEzMDE0IDEwLjYwNTJMMy45NzUyOCAxNC4xMzE0QzMuMDAyNjcgMTUuNzIyOSAyLjUxNjM3IDE2LjUxODcgMi41NzM3MiAxNy4xNzQzQzIuNjIzNzIgMTcuNzQ1OSAyLjkxNjgxIDE4LjI2ODUgMy4zNzg0NiAxOC42MDkyQzMuOTA3OTkgMTkgNC44NDA1OSAxOSA2LjcwNTc4IDE5SDguNU0xNi44ODg5IDguOTk5OTlMMTQuNzMwNSA1LjQ2ODA4QzEzLjgyNzcgMy45OTA3OSAxMy4zNzYzIDMuMjUyMTQgMTIuNzk1MiAzLjAwMDMzQzEyLjI4NzkgMi43ODA0OSAxMS43MTIxIDIuNzgwNDkgMTEuMjA0OCAzLjAwMDMzQzEwLjYyMzcgMy4yNTIxNCAxMC4xNzIzIDMuOTkwNzkgOS4yNjk1IDUuNDY4MDlMOC4yNDk2NyA3LjEzNjg5TTE4IDUuMDAwMDZMMTYuOTAxOSA5LjA5ODEzTDEyLjgwMzggOC4wMDAwNk0yIDExLjU5ODFMNi4wOTgwOCAxMC41TDcuMTk2MTUgMTQuNTk4MU0xNS41IDIyTDEyLjUgMTlMMTUuNSAxNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==)
 */
export const ArrowsTriangleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M13 19H17.2942C19.1594 19 20.092 19 20.6215 18.6092C21.0832 18.2685 21.3763 17.7459 21.4263 17.1743C21.4836 16.5187 20.9973 15.7229 20.0247 14.1313L19.0278 12.5M6.13014 10.6052L3.97528 14.1314C3.00267 15.7229 2.51637 16.5187 2.57372 17.1743C2.62372 17.7459 2.91681 18.2685 3.37846 18.6092C3.90799 19 4.84059 19 6.70578 19H8.5M16.8889 8.99999L14.7305 5.46808C13.8277 3.99079 13.3763 3.25214 12.7952 3.00033C12.2879 2.78049 11.7121 2.78049 11.2048 3.00033C10.6237 3.25214 10.1723 3.99079 9.2695 5.46809L8.24967 7.13689M18 5.00006L16.9019 9.09813L12.8038 8.00006M2 11.5981L6.09808 10.5L7.19615 14.5981M15.5 22L12.5 19L15.5 16"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ArrowsTriangleIcon.displayName = 'ArrowsTriangleIcon';
