import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyQzEzLjY1NjkgMjIgMTUgMjAuNjU2OSAxNSAxOVYxOC41QzE1IDE4LjAzNTYgMTUgMTcuODAzNCAxNS4wMjU3IDE3LjYwODRDMTUuMjAyOSAxNi4yNjIyIDE2LjI2MjIgMTUuMjAyOSAxNy42MDg0IDE1LjAyNTdDMTcuODAzNCAxNSAxOC4wMzU2IDE1IDE4LjUgMTVIMTlDMjAuNjU2OSAxNSAyMiAxMy42NTY5IDIyIDEyQzIyIDYuNDc3MTUgMTcuNTIyOCAyIDEyIDJDNi40NzcxNSAyIDIgNi40NzcxNSAyIDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNyAxM0M3LjU1MjI4IDEzIDggMTIuNTUyMyA4IDEyQzggMTEuNDQ3NyA3LjU1MjI4IDExIDcgMTFDNi40NDc3MiAxMSA2IDExLjQ0NzcgNiAxMkM2IDEyLjU1MjMgNi40NDc3MiAxMyA3IDEzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgOUMxNi41NTIzIDkgMTcgOC41NTIyOCAxNyA4QzE3IDcuNDQ3NzIgMTYuNTUyMyA3IDE2IDdDMTUuNDQ3NyA3IDE1IDcuNDQ3NzIgMTUgOEMxNSA4LjU1MjI4IDE1LjQ0NzcgOSAxNiA5WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTAgOEMxMC41NTIzIDggMTEgNy41NTIyOCAxMSA3QzExIDYuNDQ3NzIgMTAuNTUyMyA2IDEwIDZDOS40NDc3MiA2IDkgNi40NDc3MiA5IDdDOSA3LjU1MjI4IDkuNDQ3NzIgOCAxMCA4WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const PaletteIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 18.0356 15 17.8034 15.0257 17.6084C15.2029 16.2622 16.2622 15.2029 17.6084 15.0257C17.8034 15 18.0356 15 18.5 15H19C20.6569 15 22 13.6569 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

PaletteIcon.displayName = 'PaletteIcon';
