import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNSAxNy41SDlDOSAxNy41IDExIDE1LjI0NDQgMTEgMTIuNUMxMSAxMSA5LjkxNDc5IDEwLjQ4NjcgOS44OTUzNCA4Ljk2MjA0QzkuODk2NiA1Ljk0NDA0IDEzLjUyOTcgNi4xMDQ1IDE0Ljc5MjYgNy4zMDQwMk05IDEyLjVIMTRNMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const CurrencyPoundCircleIcon = React.forwardRef<
	SVGSVGElement,
	React.SVGProps<SVGSVGElement>
>((props, ref) => {
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
				d="M15 17.5H9C9 17.5 11 15.2444 11 12.5C11 11 9.91479 10.4867 9.89534 8.96204C9.8966 5.94404 13.5297 6.1045 14.7926 7.30402M9 12.5H14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
				stroke="currentColor"
				strokeWidth="1.66667"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
});

CurrencyPoundCircleIcon.displayName = 'CurrencyPoundCircleIcon';
