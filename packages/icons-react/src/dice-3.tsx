import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNi4yNSA3Ljc1SDE2LjI1NU0xMiAxMkgxMi4wMDVNNy43NSAxNi4yNUg3Ljc1NU03LjggMjFIMTYuMkMxNy44ODAyIDIxIDE4LjcyMDIgMjEgMTkuMzYyIDIwLjY3M0MxOS45MjY1IDIwLjM4NTQgMjAuMzg1NCAxOS45MjY1IDIwLjY3MyAxOS4zNjJDMjEgMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjJWNy44QzIxIDYuMTE5ODQgMjEgNS4yNzk3NiAyMC42NzMgNC42MzgwM0MyMC4zODU0IDQuMDczNTQgMTkuOTI2NSAzLjYxNDYgMTkuMzYyIDMuMzI2OThDMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yIDNINy44QzYuMTE5ODQgMyA1LjI3OTc2IDMgNC42MzgwMyAzLjMyNjk4QzQuMDczNTQgMy42MTQ2IDMuNjE0NiA0LjA3MzU0IDMuMzI2OTggNC42MzgwM0MzIDUuMjc5NzYgMyA2LjExOTg0IDMgNy44VjE2LjJDMyAxNy44ODAyIDMgMTguNzIwMiAzLjMyNjk4IDE5LjM2MkMzLjYxNDYgMTkuOTI2NSA0LjA3MzU0IDIwLjM4NTQgNC42MzgwMyAyMC42NzNDNS4yNzk3NiAyMSA2LjExOTg0IDIxIDcuOCAyMVpNMTYuNSA3Ljc1QzE2LjUgNy44ODgwNyAxNi4zODgxIDggMTYuMjUgOEMxNi4xMTE5IDggMTYgNy44ODgwNyAxNiA3Ljc1QzE2IDcuNjExOTMgMTYuMTExOSA3LjUgMTYuMjUgNy41QzE2LjM4ODEgNy41IDE2LjUgNy42MTE5MyAxNi41IDcuNzVaTTEyLjI1IDEyQzEyLjI1IDEyLjEzODEgMTIuMTM4MSAxMi4yNSAxMiAxMi4yNUMxMS44NjE5IDEyLjI1IDExLjc1IDEyLjEzODEgMTEuNzUgMTJDMTEuNzUgMTEuODYxOSAxMS44NjE5IDExLjc1IDEyIDExLjc1QzEyLjEzODEgMTEuNzUgMTIuMjUgMTEuODYxOSAxMi4yNSAxMlpNOCAxNi4yNUM4IDE2LjM4ODEgNy44ODgwNyAxNi41IDcuNzUgMTYuNUM3LjYxMTkzIDE2LjUgNy41IDE2LjM4ODEgNy41IDE2LjI1QzcuNSAxNi4xMTE5IDcuNjExOTMgMTYgNy43NSAxNkM3Ljg4ODA3IDE2IDggMTYuMTExOSA4IDE2LjI1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const Dice3Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M16.25 7.75H16.255M12 12H12.005M7.75 16.25H7.755M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21ZM16.5 7.75C16.5 7.88807 16.3881 8 16.25 8C16.1119 8 16 7.88807 16 7.75C16 7.61193 16.1119 7.5 16.25 7.5C16.3881 7.5 16.5 7.61193 16.5 7.75ZM12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12ZM8 16.25C8 16.3881 7.88807 16.5 7.75 16.5C7.61193 16.5 7.5 16.3881 7.5 16.25C7.5 16.1119 7.61193 16 7.75 16C7.88807 16 8 16.1119 8 16.25Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Dice3Icon.displayName = 'Dice3Icon';
