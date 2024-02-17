import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik02LjA5NDM2IDExLjIyODhDNi4wMzIyMSAxMC44MjgyIDUuOTk5OTYgMTAuNDE3OSA1Ljk5OTk2IDEwQzUuOTk5OTYgNS41ODE3MiA5LjYwNTI1IDIgMTQuMDUyNiAyQzE4LjQ5OTkgMiAyMi4xMDUyIDUuNTgxNzIgMjIuMTA1MiAxMEMyMi4xMDUyIDEwLjk5ODEgMjEuOTIxMyAxMS45NTM1IDIxLjU4NTIgMTIuODM0NUMyMS41MTU0IDEzLjAxNzUgMjEuNDgwNCAxMy4xMDkgMjEuNDY0NiAxMy4xODA0QzIxLjQ0ODkgMTMuMjUxMiAyMS40NDI4IDEzLjMwMSAyMS40NDExIDEzLjM3MzVDMjEuNDM5NCAxMy40NDY2IDIxLjQ0OTMgMTMuNTI3MiAyMS40NjkyIDEzLjY4ODNMMjEuODcxNyAxNi45NTg1QzIxLjkxNTMgMTcuMzEyNSAyMS45MzcxIDE3LjQ4OTUgMjEuODc4MiAxNy42MTgyQzIxLjgyNjYgMTcuNzMxIDIxLjczNSAxNy44MjA1IDIxLjYyMTEgMTcuODY5NUMyMS40OTExIDE3LjkyNTQgMjEuMzE0NiAxNy44OTk1IDIwLjk2MTcgMTcuODQ3OEwxNy43NzY1IDE3LjM4MDlDMTcuNjEwMSAxNy4zNTY1IDE3LjUyNyAxNy4zNDQzIDE3LjQ1MTIgMTcuMzQ0OEMxNy4zNzYzIDE3LjM0NTIgMTcuMzI0NSAxNy4zNTA3IDE3LjI1MTEgMTcuMzY2MUMxNy4xNzcgMTcuMzgxNyAxNy4wODIzIDE3LjQxNzIgMTYuODkzIDE3LjQ4ODFDMTYuMDA5NyAxNy44MTkgMTUuMDUyNCAxOCAxNC4wNTI2IDE4QzEzLjYzNDQgMTggMTMuMjIzNyAxNy45NjgzIDEyLjgyMjcgMTcuOTA3M003LjYzMTU4IDIyQzEwLjU5NjUgMjIgMTMgMTkuNTM3NiAxMyAxNi41QzEzIDEzLjQ2MjQgMTAuNTk2NSAxMSA3LjYzMTU4IDExQzQuNjY2NjggMTEgMi4yNjMxNiAxMy40NjI0IDIuMjYzMTYgMTYuNUMyLjI2MzE2IDE3LjExMDYgMi4zNjAyOCAxNy42OTc5IDIuNTM5NTUgMTguMjQ2N0MyLjYxNTMzIDE4LjQ3ODcgMi42NTMyMiAxOC41OTQ3IDIuNjY1NjYgMTguNjczOUMyLjY3ODY0IDE4Ljc1NjcgMi42ODA5MSAxOC44MDMxIDIuNjc2MDggMTguODg2N0MyLjY3MTQ1IDE4Ljk2NjggMi42NTE0MSAxOS4wNTczIDIuNjExMzQgMTkuMjM4M0wyIDIyTDQuOTk0OCAyMS41OTFDNS4xNTgyNyAyMS41Njg3IDUuMjQgMjEuNTU3NSA1LjMxMTM3IDIxLjU1OEM1LjM4NjUyIDIxLjU1ODUgNS40MjY0MSAyMS41NjI2IDUuNTAwMTEgMjEuNTc3M0M1LjU3MDEgMjEuNTkxMiA1LjY3NDE2IDIxLjYyNzkgNS44ODIyNyAyMS43MDE0QzYuNDMwNTkgMjEuODk0OSA3LjAxOTExIDIyIDcuNjMxNTggMjJaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const MessageChatCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M6.09436 11.2288C6.03221 10.8282 5.99996 10.4179 5.99996 10C5.99996 5.58172 9.60525 2 14.0526 2C18.4999 2 22.1052 5.58172 22.1052 10C22.1052 10.9981 21.9213 11.9535 21.5852 12.8345C21.5154 13.0175 21.4804 13.109 21.4646 13.1804C21.4489 13.2512 21.4428 13.301 21.4411 13.3735C21.4394 13.4466 21.4493 13.5272 21.4692 13.6883L21.8717 16.9585C21.9153 17.3125 21.9371 17.4895 21.8782 17.6182C21.8266 17.731 21.735 17.8205 21.6211 17.8695C21.4911 17.9254 21.3146 17.8995 20.9617 17.8478L17.7765 17.3809C17.6101 17.3565 17.527 17.3443 17.4512 17.3448C17.3763 17.3452 17.3245 17.3507 17.2511 17.3661C17.177 17.3817 17.0823 17.4172 16.893 17.4881C16.0097 17.819 15.0524 18 14.0526 18C13.6344 18 13.2237 17.9683 12.8227 17.9073M7.63158 22C10.5965 22 13 19.5376 13 16.5C13 13.4624 10.5965 11 7.63158 11C4.66668 11 2.26316 13.4624 2.26316 16.5C2.26316 17.1106 2.36028 17.6979 2.53955 18.2467C2.61533 18.4787 2.65322 18.5947 2.66566 18.6739C2.67864 18.7567 2.68091 18.8031 2.67608 18.8867C2.67145 18.9668 2.65141 19.0573 2.61134 19.2383L2 22L4.9948 21.591C5.15827 21.5687 5.24 21.5575 5.31137 21.558C5.38652 21.5585 5.42641 21.5626 5.50011 21.5773C5.5701 21.5912 5.67416 21.6279 5.88227 21.7014C6.43059 21.8949 7.01911 22 7.63158 22Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MessageChatCircleIcon.displayName = 'MessageChatCircleIcon';
