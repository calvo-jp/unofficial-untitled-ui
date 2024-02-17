import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yLjM5MDE5IDE4LjA5ODNMMTAuNjE1MSAzLjg5MTcxQzExLjA2OTYgMy4xMDY1NSAxMS4yOTY5IDIuNzEzOTYgMTEuNTkzNSAyLjU4MjExQzExLjg1MjEgMi40NjcxIDEyLjE0NzQgMi40NjcxIDEyLjQwNjEgMi41ODIxMUMxMi43MDI2IDIuNzEzOTYgMTIuOTI5OSAzLjEwNjU0IDEzLjM4NDQgMy44OTE3MUwyMS42MDkzIDE4LjA5ODNDMjIuMDY1NSAxOC44ODYzIDIyLjI5MzYgMTkuMjgwMyAyMi4yNTk5IDE5LjYwMzdDMjIuMjMwNSAxOS44ODU3IDIyLjA4MjcgMjAuMTQyIDIxLjg1MzQgMjAuMzA4OEMyMS41OTA0IDIwLjUgMjEuMTM1MiAyMC41IDIwLjIyNDYgMjAuNUgzLjc3NDg3QzIuODY0MzUgMjAuNSAyLjQwOTA4IDIwLjUgMi4xNDYxMyAyMC4zMDg4QzEuOTE2NzcgMjAuMTQyIDEuNzY5IDE5Ljg4NTcgMS43Mzk1OSAxOS42MDM3QzEuNzA1ODggMTkuMjgwMyAxLjkzMzk4IDE4Ljg4NjMgMi4zOTAxOSAxOC4wOTgzWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const TriangleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

TriangleIcon.displayName = 'TriangleIcon';
