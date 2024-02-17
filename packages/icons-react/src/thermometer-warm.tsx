import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiA5QzExLjEwNzcgOC45ODU2MiAxMC4yMzYzIDkuMjcwMDMgOS41MjQyNCA5LjgwOEM4LjgxMjIyIDEwLjM0NiA4LjMwMDU1IDExLjEwNjYgOC4wNzA2MSAxMS45Njg4QzcuODQwNjggMTIuODMxMSA3LjkwNTY4IDEzLjc0NTUgOC4yNTUyOSAxNC41NjY1QzguNjA0OSAxNS4zODc2IDkuMjE5MDQgMTYuMDY4MiAxMCAxNi41TTEyIDNWNU02LjYgMTguNEw1LjIgMTkuOE00IDEzSDJNNi42IDcuNkw1LjIgNi4yTTIwIDE0LjUzNTFWNEMyMCAyLjg5NTQzIDE5LjEwNDYgMiAxOCAyQzE2Ljg5NTQgMiAxNiAyLjg5NTQzIDE2IDRWMTQuNTM1MUMxNC44MDQ0IDE1LjIyNjcgMTQgMTYuNTE5NCAxNCAxOEMxNCAyMC4yMDkxIDE1Ljc5MDkgMjIgMTggMjJDMjAuMjA5MSAyMiAyMiAyMC4yMDkxIDIyIDE4QzIyIDE2LjUxOTQgMjEuMTk1NiAxNS4yMjY3IDIwIDE0LjUzNTFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const ThermometerWarmIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 9C11.1077 8.98562 10.2363 9.27003 9.52424 9.808C8.81222 10.346 8.30055 11.1066 8.07061 11.9688C7.84068 12.8311 7.90568 13.7455 8.25529 14.5665C8.6049 15.3876 9.21904 16.0682 10 16.5M12 3V5M6.6 18.4L5.2 19.8M4 13H2M6.6 7.6L5.2 6.2M20 14.5351V4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4V14.5351C14.8044 15.2267 14 16.5194 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 16.5194 21.1956 15.2267 20 14.5351Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

ThermometerWarmIcon.displayName = 'ThermometerWarmIcon';
