import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMC44MzMzIDE1TDEyLjUgMTJIOC41TDEwLjE2NjcgOU0yMiAxM1YxMU02LjggMThIMTQuMkMxNS44ODAyIDE4IDE2LjcyMDIgMTggMTcuMzYyIDE3LjY3M0MxNy45MjY1IDE3LjM4NTQgMTguMzg1NCAxNi45MjY1IDE4LjY3MyAxNi4zNjJDMTkgMTUuNzIwMiAxOSAxNC44ODAyIDE5IDEzLjJWMTAuOEMxOSA5LjExOTg0IDE5IDguMjc5NzYgMTguNjczIDcuNjM4MDNDMTguMzg1NCA3LjA3MzU0IDE3LjkyNjUgNi42MTQ2IDE3LjM2MiA2LjMyNjk4QzE2LjcyMDIgNiAxNS44ODAyIDYgMTQuMiA2SDYuOEM1LjExOTg0IDYgNC4yNzk3NiA2IDMuNjM4MDMgNi4zMjY5OEMzLjA3MzU0IDYuNjE0NiAyLjYxNDYgNy4wNzM1NCAyLjMyNjk4IDcuNjM4MDNDMiA4LjI3OTc2IDIgOS4xMTk4NCAyIDEwLjhWMTMuMkMyIDE0Ljg4MDIgMiAxNS43MjAyIDIuMzI2OTggMTYuMzYyQzIuNjE0NiAxNi45MjY1IDMuMDczNTQgMTcuMzg1NCAzLjYzODAzIDE3LjY3M0M0LjI3OTc2IDE4IDUuMTE5ODQgMTggNi44IDE4WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const BatteryCharging01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M10.8333 15L12.5 12H8.5L10.1667 9M22 13V11M6.8 18H14.2C15.8802 18 16.7202 18 17.362 17.673C17.9265 17.3854 18.3854 16.9265 18.673 16.362C19 15.7202 19 14.8802 19 13.2V10.8C19 9.11984 19 8.27976 18.673 7.63803C18.3854 7.07354 17.9265 6.6146 17.362 6.32698C16.7202 6 15.8802 6 14.2 6H6.8C5.11984 6 4.27976 6 3.63803 6.32698C3.07354 6.6146 2.6146 7.07354 2.32698 7.63803C2 8.27976 2 9.11984 2 10.8V13.2C2 14.8802 2 15.7202 2.32698 16.362C2.6146 16.9265 3.07354 17.3854 3.63803 17.673C4.27976 18 5.11984 18 6.8 18Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

BatteryCharging01Icon.displayName = 'BatteryCharging01Icon';
