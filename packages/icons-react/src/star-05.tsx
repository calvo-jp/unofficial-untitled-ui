import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAyTDEwLjY5ODUgNy4yMDU5OUMxMC40NDQ1IDguMjIxODUgMTAuMzE3NiA4LjcyOTc4IDEwLjA1MzEgOS4xNDMwOUM5LjgxOTE1IDkuNTA4NjggOS41MDg2OCA5LjgxOTE1IDkuMTQzMDkgMTAuMDUzMUM4LjcyOTc4IDEwLjMxNzYgOC4yMjE4NSAxMC40NDQ1IDcuMjA1OTkgMTAuNjk4NUwyIDEyTDcuMjA1OTkgMTMuMzAxNUM4LjIyMTg1IDEzLjU1NTUgOC43Mjk3OCAxMy42ODI0IDkuMTQzMDkgMTMuOTQ2OUM5LjUwODY4IDE0LjE4MDggOS44MTkxNSAxNC40OTEzIDEwLjA1MzEgMTQuODU2OUMxMC4zMTc2IDE1LjI3MDIgMTAuNDQ0NSAxNS43NzgyIDEwLjY5ODUgMTYuNzk0TDEyIDIyTDEzLjMwMTUgMTYuNzk0QzEzLjU1NTUgMTUuNzc4MiAxMy42ODI0IDE1LjI3MDIgMTMuOTQ2OSAxNC44NTY5QzE0LjE4MDggMTQuNDkxMyAxNC40OTEzIDE0LjE4MDggMTQuODU2OSAxMy45NDY5QzE1LjI3MDIgMTMuNjgyNCAxNS43NzgyIDEzLjU1NTUgMTYuNzk0IDEzLjMwMTVMMjIgMTJMMTYuNzk0IDEwLjY5ODVDMTUuNzc4MiAxMC40NDQ1IDE1LjI3MDIgMTAuMzE3NiAxNC44NTY5IDEwLjA1MzFDMTQuNDkxMyA5LjgxOTE1IDE0LjE4MDggOS41MDg2OCAxMy45NDY5IDkuMTQzMDlDMTMuNjgyNCA4LjcyOTc4IDEzLjU1NTUgOC4yMjE4NSAxMy4zMDE1IDcuMjA1OTlMMTIgMloiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const Star05Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

Star05Icon.displayName = 'Star05Icon';
