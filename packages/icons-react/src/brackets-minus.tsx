import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xOC41NzA4IDIwQzE5LjgzMjggMjAgMjAuODU2OCAxOC45NzcgMjAuODU2OCAxNy43MTRWMTMuMTQzTDIxLjk5OTggMTJMMjAuODU2OCAxMC44NTdWNi4yODZDMjAuODU2OCA1LjAyMyAxOS44MzM4IDQgMTguNTcwOCA0TTUuNDI5IDRDNC4xNjYgNCAzLjE0MyA1LjAyMyAzLjE0MyA2LjI4NlYxMC44NTdMMiAxMkwzLjE0MyAxMy4xNDNWMTcuNzE0QzMuMTQzIDE4Ljk3NyA0LjE2NiAyMCA1LjQyOSAyME04IDEySDE2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const BracketsMinusIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20M8 12H16"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

BracketsMinusIcon.displayName = 'BracketsMinusIcon';
