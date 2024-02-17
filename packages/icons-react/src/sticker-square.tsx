import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMyAzLjVWNi4yQzEzIDcuODgwMTYgMTMgOC43MjAyNCAxMy4zMjcgOS4zNjE5N0MxMy42MTQ2IDkuOTI2NDYgMTQuMDczNSAxMC4zODU0IDE0LjYzOCAxMC42NzNDMTUuMjc5OCAxMSAxNi4xMTk4IDExIDE3LjggMTFIMjAuNU0yMSAxMi45ODgyVjE2LjJDMjEgMTcuODgwMiAyMSAxOC43MjAyIDIwLjY3MyAxOS4zNjJDMjAuMzg1NCAxOS45MjY1IDE5LjkyNjUgMjAuMzg1NCAxOS4zNjIgMjAuNjczQzE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yIDIxSDcuOEM2LjExOTg0IDIxIDUuMjc5NzYgMjEgNC42MzgwMyAyMC42NzNDNC4wNzM1NCAyMC4zODU0IDMuNjE0NiAxOS45MjY1IDMuMzI2OTggMTkuMzYyQzMgMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yVjcuOEMzIDYuMTE5ODQgMyA1LjI3OTc2IDMuMzI2OTggNC42MzgwM0MzLjYxNDYgNC4wNzM1NCA0LjA3MzU0IDMuNjE0NiA0LjYzODAzIDMuMzI2OThDNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjggM0gxMS4wMTE4QzExLjc0NTUgMyAxMi4xMTI0IDMgMTIuNDU3NyAzLjA4Mjg5QzEyLjc2MzggMy4xNTYzOCAxMy4wNTY0IDMuMjc3NTkgMTMuMzI0OSAzLjQ0MjA4QzEzLjYyNzYgMy42Mjc2IDEzLjg4NyAzLjg4NzAzIDE0LjQwNTkgNC40MDU4OUwxOS41OTQxIDkuNTk0MTFDMjAuMTEzIDEwLjExMyAyMC4zNzI0IDEwLjM3MjQgMjAuNTU3OSAxMC42NzUxQzIwLjcyMjQgMTAuOTQzNiAyMC44NDM2IDExLjIzNjIgMjAuOTE3MSAxMS41NDIzQzIxIDExLjg4NzYgMjEgMTIuMjU0NSAyMSAxMi45ODgyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const StickerSquareIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M13 3.5V6.2C13 7.88016 13 8.72024 13.327 9.36197C13.6146 9.92646 14.0735 10.3854 14.638 10.673C15.2798 11 16.1198 11 17.8 11H20.5M21 12.9882V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H11.0118C11.7455 3 12.1124 3 12.4577 3.08289C12.7638 3.15638 13.0564 3.27759 13.3249 3.44208C13.6276 3.6276 13.887 3.88703 14.4059 4.40589L19.5941 9.59411C20.113 10.113 20.3724 10.3724 20.5579 10.6751C20.7224 10.9436 20.8436 11.2362 20.9171 11.5423C21 11.8876 21 12.2545 21 12.9882Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

StickerSquareIcon.displayName = 'StickerSquareIcon';
