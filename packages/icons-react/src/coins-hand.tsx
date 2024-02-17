import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMy41Mjk1IDguMzUxODZDMTIuOTU3MSA4Ljc1OTk1IDEyLjI1NjYgOSAxMS41IDlDOS41NjcgOSA4IDcuNDMzIDggNS41QzggMy41NjcgOS41NjcgMiAxMS41IDJDMTIuNzUzIDIgMTMuODUyMiAyLjY1ODQyIDE0LjQ3MDUgMy42NDgxNE02IDIwLjA4NzJIOC42MTAyOUM4Ljk1MDYzIDIwLjA4NzIgOS4yODg4OCAyMC4xMjc3IDkuNjE4ODEgMjAuMjA4NkwxMi4zNzY5IDIwLjg3ODlDMTIuOTc1MyAyMS4wMjQ3IDEzLjU5ODggMjEuMDM4OCAxNC4yMDM1IDIwLjkyMTRMMTcuMjUzIDIwLjMyODFDMTguMDU4NSAyMC4xNzEyIDE4Ljc5OTYgMTkuNzg1NCAxOS4zODAzIDE5LjIyMDVMMjEuNTM3OSAxNy4xMjE3QzIyLjE1NCAxNi41MjM0IDIyLjE1NCAxNS41NTI0IDIxLjUzNzkgMTQuOTUzMUMyMC45ODMyIDE0LjQxMzQgMjAuMTA0NyAxNC4zNTI3IDE5LjQ3NzEgMTQuODEwM0wxNi45NjI2IDE2LjY0NDlDMTYuNjAyNSAxNi45MDgxIDE2LjE2NDMgMTcuMDQ5OCAxNS43MTM3IDE3LjA0OThIMTMuMjg1NUwxNC44MzExIDE3LjA0OThDMTUuNzAyMiAxNy4wNDk4IDE2LjQwNzkgMTYuMzYzMyAxNi40MDc5IDE1LjUxNTlWMTUuMjA5MUMxNi40MDc5IDE0LjUwNTUgMTUuOTE1NiAxMy44OTIgMTUuMjE0MSAxMy43MjE5TDEyLjgyODYgMTMuMTQxN0MxMi40NDA0IDEzLjA0NzYgMTIuMDQyOCAxMyAxMS42NDMxIDEzQzEwLjY3ODMgMTMgOC45MzE4OSAxMy43OTg4IDguOTMxODkgMTMuNzk4OEw2IDE1LjAyNDlNMjAgNi41QzIwIDguNDMzIDE4LjQzMyAxMCAxNi41IDEwQzE0LjU2NyAxMCAxMyA4LjQzMyAxMyA2LjVDMTMgNC41NjcgMTQuNTY3IDMgMTYuNSAzQzE4LjQzMyAzIDIwIDQuNTY3IDIwIDYuNVpNMiAxNC42TDIgMjAuNEMyIDIwLjk2MDEgMiAyMS4yNDAxIDIuMTA4OTkgMjEuNDU0QzIuMjA0ODcgMjEuNjQyMiAyLjM1Nzg1IDIxLjc5NTEgMi41NDYwMSAyMS44OTFDMi43NTk5MiAyMiAzLjAzOTk1IDIyIDMuNiAyMkg0LjRDNC45NjAwNSAyMiA1LjI0MDA4IDIyIDUuNDUzOTkgMjEuODkxQzUuNjQyMTUgMjEuNzk1MSA1Ljc5NTEzIDIxLjY0MjIgNS44OTEwMSAyMS40NTRDNiAyMS4yNDAxIDYgMjAuOTYwMSA2IDIwLjRWMTQuNkM2IDE0LjAzOTkgNiAxMy43NTk5IDUuODkxMDEgMTMuNTQ2QzUuNzk1MTMgMTMuMzU3OCA1LjY0MjE1IDEzLjIwNDkgNS40NTM5OSAxMy4xMDlDNS4yNDAwOCAxMyA0Ljk2MDA1IDEzIDQuNCAxM0wzLjYgMTNDMy4wMzk5NSAxMyAyLjc1OTkyIDEzIDIuNTQ2MDEgMTMuMTA5QzIuMzU3ODUgMTMuMjA0OSAyLjIwNDg3IDEzLjM1NzggMi4xMDg5OSAxMy41NDZDMiAxMy43NTk5IDIgMTQuMDM5OSAyIDE0LjZaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const CoinsHandIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CoinsHandIcon.displayName = 'CoinsHandIcon';
