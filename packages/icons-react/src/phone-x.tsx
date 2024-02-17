import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMC45OTk2IDNMMTQuOTk5NiA5TTE0Ljk5OTYgM0wyMC45OTk2IDlNMTAuMjI2NiAxMy44NjMxQzkuMDI1MDYgMTIuNjYxNSA4LjA3NjI3IDExLjMwMjggNy4zODAyOCA5Ljg1MzIzQzcuMzIwNDEgOS43Mjg1NCA3LjI5MDQ4IDkuNjY2MTkgNy4yNjc0OCA5LjU4NzNDNy4xODU3NiA5LjMwNjk1IDcuMjQ0NDYgOC45NjI2OSA3LjQxNDQ3IDguNzI1MjZDNy40NjIzMSA4LjY1ODQ1IDcuNTE5NDcgOC42MDEyOSA3LjYzMzc4IDguNDg2OThDNy45ODMzOCA4LjEzNzM3IDguMTU4MTkgNy45NjI1NyA4LjI3MjQ3IDcuNzg2NzlDOC43MDM0NyA3LjEyMzkgOC43MDM0NyA2LjI2OTMyIDguMjcyNDcgNS42MDY0M0M4LjE1ODE5IDUuNDMwNjUgNy45ODMzOCA1LjI1NTg1IDcuNjMzNzggNC45MDYyNEw3LjQzODkxIDQuNzExMzdDNi45MDc0NyA0LjE3OTkzIDYuNjQxNzQgMy45MTQyMSA2LjM1NjM2IDMuNzY5ODdDNS43ODg4IDMuNDgyOCA1LjExODU0IDMuNDgyOCA0LjU1MDk4IDMuNzY5ODdDNC4yNjU2IDMuOTE0MjEgMy45OTk4NyA0LjE3OTkzIDMuNDY4NDMgNC43MTEzN0wzLjMxMDggNC44NjkwMUMyLjc4MTE3IDUuMzk4NjMgMi41MTYzNiA1LjY2MzQ0IDIuMzE0MTEgNi4wMjM0OEMyLjA4OTY5IDYuNDIyOTggMS45MjgzMyA3LjA0MzQ3IDEuOTI5NyA3LjUwMTdDMS45MzA5MiA3LjkxNDY0IDIuMDExMDMgOC4xOTY4NyAyLjE3MTI0IDguNzYxMzFDMy4wMzIyMSAxMS43OTQ3IDQuNjU2NjggMTQuNjU3MSA3LjA0NDY2IDE3LjA0NUM5LjQzMjY0IDE5LjQzMyAxMi4yOTUgMjEuMDU3NSAxNS4zMjg0IDIxLjkxODVDMTUuODkyOCAyMi4wNzg3IDE2LjE3NTEgMjIuMTU4OCAxNi41ODggMjIuMTZDMTcuMDQ2MiAyMi4xNjE0IDE3LjY2NjcgMjIgMTguMDY2MiAyMS43NzU2QzE4LjQyNjMgMjEuNTczMyAxOC42OTExIDIxLjMwODUgMTkuMjIwNyAyMC43Nzg5TDE5LjM3ODMgMjAuNjIxM0MxOS45MDk4IDIwLjA4OTggMjAuMTc1NSAxOS44MjQxIDIwLjMxOTggMTkuNTM4N0MyMC42MDY5IDE4Ljk3MTIgMjAuNjA2OSAxOC4zMDA5IDIwLjMxOTggMTcuNzMzM0MyMC4xNzU1IDE3LjQ0OCAxOS45MDk4IDE3LjE4MjIgMTkuMzc4MyAxNi42NTA4TDE5LjE4MzUgMTYuNDU1OUMxOC44MzM5IDE2LjEwNjMgMTguNjU5MSAxNS45MzE1IDE4LjQ4MzMgMTUuODE3MkMxNy44MjA0IDE1LjM4NjIgMTYuOTY1OCAxNS4zODYyIDE2LjMwMjkgMTUuODE3MkMxNi4xMjcxIDE1LjkzMTUgMTUuOTUyMyAxNi4xMDYzIDE1LjYwMjcgMTYuNDU1OUMxNS40ODg0IDE2LjU3MDIgMTUuNDMxMyAxNi42Mjc0IDE1LjM2NDQgMTYuNjc1MkMxNS4xMjcgMTYuODQ1MyAxNC43ODI4IDE2LjkwNCAxNC41MDI0IDE2LjgyMjJDMTQuNDIzNSAxNi43OTkyIDE0LjM2MTIgMTYuNzY5MyAxNC4yMzY1IDE2LjcwOTRDMTIuNzg2OSAxNi4wMTM0IDExLjQyODIgMTUuMDY0NiAxMC4yMjY2IDEzLjg2MzFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const PhoneXIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M20.9996 3L14.9996 9M14.9996 3L20.9996 9M10.2266 13.8631C9.02506 12.6615 8.07627 11.3028 7.38028 9.85323C7.32041 9.72854 7.29048 9.66619 7.26748 9.5873C7.18576 9.30695 7.24446 8.96269 7.41447 8.72526C7.46231 8.65845 7.51947 8.60129 7.63378 8.48698C7.98338 8.13737 8.15819 7.96257 8.27247 7.78679C8.70347 7.1239 8.70347 6.26932 8.27247 5.60643C8.15819 5.43065 7.98338 5.25585 7.63378 4.90624L7.43891 4.71137C6.90747 4.17993 6.64174 3.91421 6.35636 3.76987C5.7888 3.4828 5.11854 3.4828 4.55098 3.76987C4.2656 3.91421 3.99987 4.17993 3.46843 4.71137L3.3108 4.86901C2.78117 5.39863 2.51636 5.66344 2.31411 6.02348C2.08969 6.42298 1.92833 7.04347 1.9297 7.5017C1.93092 7.91464 2.01103 8.19687 2.17124 8.76131C3.03221 11.7947 4.65668 14.6571 7.04466 17.045C9.43264 19.433 12.295 21.0575 15.3284 21.9185C15.8928 22.0787 16.1751 22.1588 16.588 22.16C17.0462 22.1614 17.6667 22 18.0662 21.7756C18.4263 21.5733 18.6911 21.3085 19.2207 20.7789L19.3783 20.6213C19.9098 20.0898 20.1755 19.8241 20.3198 19.5387C20.6069 18.9712 20.6069 18.3009 20.3198 17.7333C20.1755 17.448 19.9098 17.1822 19.3783 16.6508L19.1835 16.4559C18.8339 16.1063 18.6591 15.9315 18.4833 15.8172C17.8204 15.3862 16.9658 15.3862 16.3029 15.8172C16.1271 15.9315 15.9523 16.1063 15.6027 16.4559C15.4884 16.5702 15.4313 16.6274 15.3644 16.6752C15.127 16.8453 14.7828 16.904 14.5024 16.8222C14.4235 16.7992 14.3612 16.7693 14.2365 16.7094C12.7869 16.0134 11.4282 15.0646 10.2266 13.8631Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

PhoneXIcon.displayName = 'PhoneXIcon';
