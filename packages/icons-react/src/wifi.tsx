import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMiAxOS41SDEyLjAxTTIyLjgwNjQgOC43MDA3NkMxOS45NTk1IDYuMDkxOTkgMTYuMTY1NiA0LjUgMTEuOTk5OSA0LjVDNy44MzQxNCA0LjUgNC4wNDAyMyA2LjA5MTk5IDEuMTkzMzYgOC43MDA3Nk00LjczMTkzIDEyLjI0M0M2LjY3MDA2IDEwLjUzNTcgOS4yMTQwNyA5LjUgMTIgOS41QzE0Ljc4NTkgOS41IDE3LjMyOTkgMTAuNTM1NyAxOS4yNjggMTIuMjQzTTE1LjY5ODMgMTUuNzc1MUMxNC42NzkyIDE0Ljk3NjMgMTMuMzk1MiAxNC41IDExLjk5OTkgMTQuNUMxMC41ODM1IDE0LjUgOS4yODE3MiAxNC45OTA4IDguMjU1MzcgMTUuODExNiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const WifiIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

WifiIcon.displayName = 'WifiIcon';
