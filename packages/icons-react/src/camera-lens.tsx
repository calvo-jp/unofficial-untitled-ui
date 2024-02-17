import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMS40MTU1IDE1LjM0MTFDMTguNTkyNCAxNy4zNDk1IDE0Ljg4OTUgMTcuNTcyNiAxMS44NzcgMTZNMi41ODQ0NSA4LjY1ODg5QzUuNDE0MzkgNi42NDU2NiA5LjEyODQ0IDYuNDI2MzggMTIuMTQ0OCA4LjAxMTQ5TTE1LjM3MzcgMTQuMTI0M0MxOC4yNjA0IDEyLjMwNSAxOS45MzE5IDguOTc0MTMgMTkuNjAxIDUuNTEyMjJNOC41ODE4NCA5LjkwMzcxQzUuNzIyMzEgMTEuNzI5MSA0LjA2OTU5IDE1LjA0MzYgNC4zOTg3OCAxOC40ODc4TTE1LjUyNjkgMTAuMTM3QzE1LjM5MzkgNi43Mjg1MSAxMy4zNDUgMy42MTY4NCAxMC4xODIxIDIuMTcyMjJNOC40NzU2MiAxMy45MjU2QzguNjMxMTIgMTcuMzA5NiAxMC42NzQzIDIwLjM5MiAxMy44MTc3IDIxLjgyNzhNMTkuMDcxIDQuOTI4OTNDMjIuOTc2MyA4LjgzNDE4IDIyLjk3NjMgMTUuMTY1OCAxOS4wNzEgMTkuMDcxQzE1LjE2NTggMjIuOTc2MyA4LjgzNDE2IDIyLjk3NjMgNC45Mjg5MyAxOS4wNzFDMS4wMjM2OSAxNS4xNjU4IDEuMDIzNjkgOC44MzQxNiA0LjkyODkzIDQuOTI4OTNDOC44MzQxOCAxLjAyMzY5IDE1LjE2NTggMS4wMjM2OSAxOS4wNzEgNC45Mjg5M1pNMTQuODI4NCA5LjE3MTU3QzE2LjM5MDUgMTAuNzMzNyAxNi4zOTA1IDEzLjI2NjMgMTQuODI4NCAxNC44Mjg0QzEzLjI2NjMgMTYuMzkwNSAxMC43MzM3IDE2LjM5MDUgOS4xNzE1NyAxNC44Mjg0QzcuNjA5NDggMTMuMjY2MyA3LjYwOTQ4IDEwLjczMzcgOS4xNzE1NyA5LjE3MTU3QzEwLjczMzcgNy42MDk0OCAxMy4yNjYzIDcuNjA5NDggMTQuODI4NCA5LjE3MTU3WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const CameraLensIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M21.4155 15.3411C18.5924 17.3495 14.8895 17.5726 11.877 16M2.58445 8.65889C5.41439 6.64566 9.12844 6.42638 12.1448 8.01149M15.3737 14.1243C18.2604 12.305 19.9319 8.97413 19.601 5.51222M8.58184 9.90371C5.72231 11.7291 4.06959 15.0436 4.39878 18.4878M15.5269 10.137C15.3939 6.72851 13.345 3.61684 10.1821 2.17222M8.47562 13.9256C8.63112 17.3096 10.6743 20.392 13.8177 21.8278M19.071 4.92893C22.9763 8.83418 22.9763 15.1658 19.071 19.071C15.1658 22.9763 8.83416 22.9763 4.92893 19.071C1.02369 15.1658 1.02369 8.83416 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.071 4.92893ZM14.8284 9.17157C16.3905 10.7337 16.3905 13.2663 14.8284 14.8284C13.2663 16.3905 10.7337 16.3905 9.17157 14.8284C7.60948 13.2663 7.60948 10.7337 9.17157 9.17157C10.7337 7.60948 13.2663 7.60948 14.8284 9.17157Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CameraLensIcon.displayName = 'CameraLensIcon';
