import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik03LjUgMTAuNUg3LjUxTTEyIDEwLjVIMTIuMDFNMTYuNSAxMC41SDE2LjUxTTcgMThWMjAuMzM1NUM3IDIwLjg2ODQgNyAyMS4xMzQ4IDcuMTA5MjMgMjEuMjcxNkM3LjIwNDIyIDIxLjM5MDYgNy4zNDgyNyAyMS40NTk5IDcuNTAwNTQgMjEuNDU5N0M3LjY3NTYzIDIxLjQ1OTUgNy44ODM2NyAyMS4yOTMxIDguMjk5NzYgMjAuOTYwMkwxMC42ODUyIDE5LjA1MThDMTEuMTcyNSAxOC42NjIgMTEuNDE2MiAxOC40NjcxIDExLjY4NzUgMTguMzI4NUMxMS45MjgyIDE4LjIwNTUgMTIuMTg0NCAxOC4xMTU2IDEyLjQ0OTIgMTguMDYxM0MxMi43NDc3IDE4IDEzLjA1OTcgMTggMTMuNjgzNyAxOEgxNi4yQzE3Ljg4MDIgMTggMTguNzIwMiAxOCAxOS4zNjIgMTcuNjczQzE5LjkyNjUgMTcuMzg1NCAyMC4zODU0IDE2LjkyNjUgMjAuNjczIDE2LjM2MkMyMSAxNS43MjAyIDIxIDE0Ljg4MDIgMjEgMTMuMlY3LjhDMjEgNi4xMTk4NCAyMSA1LjI3OTc2IDIwLjY3MyA0LjYzODAzQzIwLjM4NTQgNC4wNzM1NCAxOS45MjY1IDMuNjE0NiAxOS4zNjIgMy4zMjY5OEMxOC43MjAyIDMgMTcuODgwMiAzIDE2LjIgM0g3LjhDNi4xMTk4NCAzIDUuMjc5NzYgMyA0LjYzODAzIDMuMzI2OThDNC4wNzM1NCAzLjYxNDYgMy42MTQ2IDQuMDczNTQgMy4zMjY5OCA0LjYzODAzQzMgNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjhWMTRDMyAxNC45MyAzIDE1LjM5NSAzLjEwMjIyIDE1Ljc3NjVDMy4zNzk2MiAxNi44MTE3IDQuMTg4MjcgMTcuNjIwNCA1LjIyMzU0IDE3Ljg5NzhDNS42MDUwNCAxOCA2LjA3MDAzIDE4IDcgMThaTTggMTAuNUM4IDEwLjc3NjEgNy43NzYxNCAxMSA3LjUgMTFDNy4yMjM4NiAxMSA3IDEwLjc3NjEgNyAxMC41QzcgMTAuMjIzOSA3LjIyMzg2IDEwIDcuNSAxMEM3Ljc3NjE0IDEwIDggMTAuMjIzOSA4IDEwLjVaTTEyLjUgMTAuNUMxMi41IDEwLjc3NjEgMTIuMjc2MSAxMSAxMiAxMUMxMS43MjM5IDExIDExLjUgMTAuNzc2MSAxMS41IDEwLjVDMTEuNSAxMC4yMjM5IDExLjcyMzkgMTAgMTIgMTBDMTIuMjc2MSAxMCAxMi41IDEwLjIyMzkgMTIuNSAxMC41Wk0xNyAxMC41QzE3IDEwLjc3NjEgMTYuNzc2MSAxMSAxNi41IDExQzE2LjIyMzkgMTEgMTYgMTAuNzc2MSAxNiAxMC41QzE2IDEwLjIyMzkgMTYuMjIzOSAxMCAxNi41IDEwQzE2Ljc3NjEgMTAgMTcgMTAuMjIzOSAxNyAxMC41WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const MessageDotsSquareIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

MessageDotsSquareIcon.displayName = 'MessageDotsSquareIcon';
