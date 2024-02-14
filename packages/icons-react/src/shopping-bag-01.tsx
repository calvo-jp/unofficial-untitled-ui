import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNTIgMi42NEwzLjk2IDQuNzJDMy42NTEwMiA1LjEzMTk4IDMuNDk2NTIgNS4zMzc5NyAzLjUwMDExIDUuNTEwMzlDMy41MDMyMyA1LjY2MDQ0IDMuNTczNTggNS44MDExNSAzLjY5MTc1IDUuODkzNjhDMy44Mjc1NCA2IDQuMDg1MDMgNiA0LjYgNkgxOS40QzE5LjkxNSA2IDIwLjE3MjUgNiAyMC4zMDgzIDUuODkzNjhDMjAuNDI2NCA1LjgwMTE1IDIwLjQ5NjggNS42NjA0NCAyMC40OTk5IDUuNTEwMzlDMjAuNTAzNSA1LjMzNzk3IDIwLjM0OSA1LjEzMTk4IDIwLjA0IDQuNzJMMTguNDggMi42NE01LjUyIDIuNjRDNS42OTYgMi40MDUzMyA1Ljc4NCAyLjI4OCA1Ljg5NTUyIDIuMjAzMzhDNS45OTQzIDIuMTI4NDIgNi4xMDYxNiAyLjA3MjUgNi4yMjUzOSAyLjAzODQ1QzYuMzYgMiA2LjUwNjY3IDIgNi44IDJIMTcuMkMxNy40OTMzIDIgMTcuNjQgMiAxNy43NzQ2IDIuMDM4NDVDMTcuODkzOCAyLjA3MjUgMTguMDA1NyAyLjEyODQyIDE4LjEwNDUgMi4yMDMzOEMxOC4yMTYgMi4yODggMTguMzA0IDIuNDA1MzMgMTguNDggMi42NE01LjUyIDIuNjRMMy42NCA1LjE0NjY2QzMuNDAyNTQgNS40NjMyOCAzLjI4MzgxIDUuNjIxNTkgMy4xOTk1IDUuNzk1OTJDMy4xMjQ2OSA1Ljk1MDYyIDMuMDcwMTIgNi4xMTQzMSAzLjAzNzE1IDYuMjgyOTZDMyA2LjQ3MzAxIDMgNi42NzA5IDMgNy4wNjY2NkwzIDE4LjhDMyAxOS45MjAxIDMgMjAuNDgwMiAzLjIxNzk5IDIwLjkwOEMzLjQwOTczIDIxLjI4NDMgMy43MTU2OSAyMS41OTAzIDQuMDkyMDIgMjEuNzgyQzQuNTE5ODQgMjIgNS4wNzk4OSAyMiA2LjIgMjJMMTcuOCAyMkMxOC45MjAxIDIyIDE5LjQ4MDIgMjIgMTkuOTA4IDIxLjc4MkMyMC4yODQzIDIxLjU5MDMgMjAuNTkwMyAyMS4yODQzIDIwLjc4MiAyMC45MDhDMjEgMjAuNDgwMiAyMSAxOS45MjAxIDIxIDE4LjhWNy4wNjY2N0MyMSA2LjY3MDkgMjEgNi40NzMwMSAyMC45NjI4IDYuMjgyOTZDMjAuOTI5OSA2LjExNDMxIDIwLjg3NTMgNS45NTA2MiAyMC44MDA1IDUuNzk1OTJDMjAuNzE2MiA1LjYyMTU5IDIwLjU5NzUgNS40NjMyOCAyMC4zNiA1LjE0NjY3TDE4LjQ4IDIuNjRNMTYgMTBDMTYgMTEuMDYwOSAxNS41Nzg2IDEyLjA3ODMgMTQuODI4NCAxMi44Mjg0QzE0LjA3ODMgMTMuNTc4NiAxMy4wNjA5IDE0IDEyIDE0QzEwLjkzOTEgMTQgOS45MjE3MiAxMy41Nzg2IDkuMTcxNTcgMTIuODI4NEM4LjQyMTQzIDEyLjA3ODMgOCAxMS4wNjA5IDggMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=)
 */
export const ShoppingBag01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
          d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ShoppingBag01Icon.displayName = 'ShoppingBag01Icon';
