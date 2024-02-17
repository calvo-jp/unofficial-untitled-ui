import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0zIDcuOEMzIDYuMTE5ODQgMyA1LjI3OTc2IDMuMzI2OTggNC42MzgwM0MzLjYxNDYgNC4wNzM1NCA0LjA3MzU0IDMuNjE0NiA0LjYzODAzIDMuMzI2OThDNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjggM0gxNi4yQzE3Ljg4MDIgMyAxOC43MjAyIDMgMTkuMzYyIDMuMzI2OThDMTkuOTI2NSAzLjYxNDYgMjAuMzg1NCA0LjA3MzU0IDIwLjY3MyA0LjYzODAzQzIxIDUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjhWMTYuMkMyMSAxNy44ODAyIDIxIDE4LjcyMDIgMjAuNjczIDE5LjM2MkMyMC4zODU0IDE5LjkyNjUgMTkuOTI2NSAyMC4zODU0IDE5LjM2MiAyMC42NzNDMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjIgMjFINy44QzYuMTE5ODQgMjEgNS4yNzk3NiAyMSA0LjYzODAzIDIwLjY3M0M0LjA3MzU0IDIwLjM4NTQgMy42MTQ2IDE5LjkyNjUgMy4zMjY5OCAxOS4zNjJDMyAxOC43MjAyIDMgMTcuODgwMiAzIDE2LjJWNy44WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNOCA5LjZDOCA5LjAzOTk1IDggOC43NTk5MiA4LjEwODk5IDguNTQ2MDFDOC4yMDQ4NyA4LjM1Nzg1IDguMzU3ODUgOC4yMDQ4NyA4LjU0NjAxIDguMTA4OTlDOC43NTk5MiA4IDkuMDM5OTUgOCA5LjYgOEgxNC40QzE0Ljk2MDEgOCAxNS4yNDAxIDggMTUuNDU0IDguMTA4OTlDMTUuNjQyMiA4LjIwNDg3IDE1Ljc5NTEgOC4zNTc4NSAxNS44OTEgOC41NDYwMUMxNiA4Ljc1OTkyIDE2IDkuMDM5OTUgMTYgOS42VjE0LjRDMTYgMTQuOTYwMSAxNiAxNS4yNDAxIDE1Ljg5MSAxNS40NTRDMTUuNzk1MSAxNS42NDIyIDE1LjY0MjIgMTUuNzk1MSAxNS40NTQgMTUuODkxQzE1LjI0MDEgMTYgMTQuOTYwMSAxNiAxNC40IDE2SDkuNkM5LjAzOTk1IDE2IDguNzU5OTIgMTYgOC41NDYwMSAxNS44OTFDOC4zNTc4NSAxNS43OTUxIDguMjA0ODcgMTUuNjQyMiA4LjEwODk5IDE1LjQ1NEM4IDE1LjI0MDEgOCAxNC45NjAxIDggMTQuNFY5LjZaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const StopSquareIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8 9.6C8 9.03995 8 8.75992 8.10899 8.54601C8.20487 8.35785 8.35785 8.20487 8.54601 8.10899C8.75992 8 9.03995 8 9.6 8H14.4C14.9601 8 15.2401 8 15.454 8.10899C15.6422 8.20487 15.7951 8.35785 15.891 8.54601C16 8.75992 16 9.03995 16 9.6V14.4C16 14.9601 16 15.2401 15.891 15.454C15.7951 15.6422 15.6422 15.7951 15.454 15.891C15.2401 16 14.9601 16 14.4 16H9.6C9.03995 16 8.75992 16 8.54601 15.891C8.35785 15.7951 8.20487 15.6422 8.10899 15.454C8 15.2401 8 14.9601 8 14.4V9.6Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

StopSquareIcon.displayName = 'StopSquareIcon';
