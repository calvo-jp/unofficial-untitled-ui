import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik02IDEySDE4TTExIDEySDEzQzE0LjM4MDcgMTIgMTUuNSAxMy4xMTkzIDE1LjUgMTQuNUMxNS41IDE1Ljg4MDcgMTQuMzgwNyAxNyAxMyAxN0gxMC44MzMzQzkuODM4MjcgMTcgOC45ODg2OCAxNi4zNzcxIDguNjUzMjEgMTUuNU0xNS4zNDY4IDguNUMxNS4wMTEzIDcuNjIyODggMTQuMTYxNyA3IDEzLjE2NjcgN0gxMUM5Ljk3NDg0IDcgOS4wOTM4IDcuNjE3MDUgOC43MDgwMiA4LjVNNy44IDIxSDE2LjJDMTcuODgwMiAyMSAxOC43MjAyIDIxIDE5LjM2MiAyMC42NzNDMTkuOTI2NSAyMC4zODU0IDIwLjM4NTQgMTkuOTI2NSAyMC42NzMgMTkuMzYyQzIxIDE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yVjcuOEMyMSA2LjExOTg0IDIxIDUuMjc5NzYgMjAuNjczIDQuNjM4MDNDMjAuMzg1NCA0LjA3MzU0IDE5LjkyNjUgMy42MTQ2IDE5LjM2MiAzLjMyNjk4QzE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMiAzSDcuOEM2LjExOTg0IDMgNS4yNzk3NiAzIDQuNjM4MDMgMy4zMjY5OEM0LjA3MzU0IDMuNjE0NiAzLjYxNDYgNC4wNzM1NCAzLjMyNjk4IDQuNjM4MDNDMyA1LjI3OTc2IDMgNi4xMTk4NCAzIDcuOFYxNi4yQzMgMTcuODgwMiAzIDE4LjcyMDIgMy4zMjY5OCAxOS4zNjJDMy42MTQ2IDE5LjkyNjUgNC4wNzM1NCAyMC4zODU0IDQuNjM4MDMgMjAuNjczQzUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjggMjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const StrikethroughSquareIcon = React.forwardRef<
	SVGSVGElement,
	React.SVGProps<SVGSVGElement>
>((props, ref) => {
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
				d="M6 12H18M11 12H13C14.3807 12 15.5 13.1193 15.5 14.5C15.5 15.8807 14.3807 17 13 17H10.8333C9.83827 17 8.98868 16.3771 8.65321 15.5M15.3468 8.5C15.0113 7.62288 14.1617 7 13.1667 7H11C9.97484 7 9.0938 7.61705 8.70802 8.5M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
				stroke="currentColor"
				strokeWidth="1.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
});

StrikethroughSquareIcon.displayName = 'StrikethroughSquareIcon';
