import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNC4zOTEgMTguMDE1QzE0LjgxOTggMTkuNjE1NCAxMy44NzAxIDIxLjI2MDQgMTIuMjY5NyAyMS42ODkzQzEwLjY2OTMgMjIuMTE4MSA5LjAyNDI2IDIxLjE2ODMgOC41OTU0MyAxOS41Njc5TTEwLjg5MTUgNS43NDEwOUMxMS4xOTU3IDUuMTkzNzkgMTEuMjk1OSA0LjUzMjI5IDExLjEyMTEgMy44Nzk3QzEwLjc2MzcgMi41NDYwMyA5LjM5Mjg4IDEuNzU0NTcgOC4wNTkyMSAyLjExMTkzQzYuNzI1NTUgMi40NjkyOCA1LjkzNDA5IDMuODQwMTMgNi4yOTE0NCA1LjE3Mzc5QzYuNDY2MzEgNS44MjYzOSA2Ljg4Mzg0IDYuMzQ5MTYgNy40MjA5NCA2LjY3MTAzTTE2LjIzNTkgOS40NDU1M0MxNS44NzkgOC4xMTM0IDE0LjkyNiA2Ljk5OTQ0IDEzLjU4NjggNi4zNDg3QzEyLjI0NzUgNS42OTc5NyAxMC42MzE2IDUuNTYzNzcgOS4wOTQ0OSA1Ljk3NTYzQzcuNTU3NDEgNi4zODc0OSA2LjIyNTA4IDcuMzExNjcgNS4zOTA2IDguNTQ0ODZDNC41NTYxMiA5Ljc3ODA1IDQuMjg3ODUgMTEuMjE5MiA0LjY0NDc5IDEyLjU1MTRDNS4yMzUzNyAxNC43NTU0IDUuMTIwNjkgMTYuNTEzOCA0Ljc0Nzc0IDE3Ljg0OTlDNC4zMjI2NyAxOS4zNzI4IDQuMTEwMTQgMjAuMTM0MiA0LjE2NzU2IDIwLjI4NzFDNC4yMzMyNSAyMC40NjIgNC4yODA3NiAyMC41MTAxIDQuNDU1IDIwLjU3NzZDNC42MDcyOSAyMC42MzY2IDUuMjQ3MDYgMjAuNDY1MSA2LjUyNjYgMjAuMTIyM0wxOC4zOTE3IDE2Ljk0MzFDMTkuNjcxMiAxNi42MDAyIDIwLjMxMSAxNi40Mjg4IDIwLjQxMzQgMTYuMzAxNUMyMC41MzA1IDE2LjE1NTkgMjAuNTQ3NiAxNi4wOTA2IDIwLjUxNzEgMTUuOTA2M0MyMC40OTA0IDE1Ljc0NTEgMTkuOTI1NiAxNS4xOTIgMTguNzk2IDE0LjA4NTdDMTcuODA1IDEzLjExNSAxNi44MjY1IDExLjY0OTYgMTYuMjM1OSA5LjQ0NTUzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const Bell04Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M14.391 18.015C14.8198 19.6154 13.8701 21.2604 12.2697 21.6893C10.6693 22.1181 9.02426 21.1683 8.59543 19.5679M10.8915 5.74109C11.1957 5.19379 11.2959 4.53229 11.1211 3.8797C10.7637 2.54603 9.39288 1.75457 8.05921 2.11193C6.72555 2.46928 5.93409 3.84013 6.29144 5.17379C6.46631 5.82639 6.88384 6.34916 7.42094 6.67103M16.2359 9.44553C15.879 8.1134 14.926 6.99944 13.5868 6.3487C12.2475 5.69797 10.6316 5.56377 9.09449 5.97563C7.55741 6.38749 6.22508 7.31167 5.3906 8.54486C4.55612 9.77805 4.28785 11.2192 4.64479 12.5514C5.23537 14.7554 5.12069 16.5138 4.74774 17.8499C4.32267 19.3728 4.11014 20.1342 4.16756 20.2871C4.23325 20.462 4.28076 20.5101 4.455 20.5776C4.60729 20.6366 5.24706 20.4651 6.5266 20.1223L18.3917 16.9431C19.6712 16.6002 20.311 16.4288 20.4134 16.3015C20.5305 16.1559 20.5476 16.0906 20.5171 15.9063C20.4904 15.7451 19.9256 15.192 18.796 14.0857C17.805 13.115 16.8265 11.6496 16.2359 9.44553Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Bell04Icon.displayName = 'Bell04Icon';
