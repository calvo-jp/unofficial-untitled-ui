import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMS43MDAzIDE2LjExODFDMjEuODkzOSAxNS42MTYgMjIgMTUuMDcwNCAyMiAxNC41QzIyIDEyLjE1NjQgMjAuMjA4NSAxMC4yMzEzIDE3LjkyMDMgMTAuMDE5NEMxNy40NTIyIDcuMTcyMTMgMTQuOTc5OCA1IDEyIDVDMTEuNTUzNCA1IDExLjExODMgNS4wNDg3OSAxMC42OTk1IDUuMTQxMzJNNy4yODc0NiA3LjI4NTg1QzYuNjczMTcgOC4wNjQxOSA2LjI0NzU5IDguOTk4MzggNi4wNzk3NCAxMC4wMTk0QzMuNzkxNTEgMTAuMjMxMyAyIDEyLjE1NjQgMiAxNC41QzIgMTYuOTg1MyA0LjAxNDcyIDE5IDYuNSAxOUgxNy41QzE3Ljk1NjEgMTkgMTguMzk2MyAxOC45MzIyIDE4LjgxMTIgMTguODA2TTMgM0wyMSAyMSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const CloudOffIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M21.7003 16.1181C21.8939 15.616 22 15.0704 22 14.5C22 12.1564 20.2085 10.2313 17.9203 10.0194C17.4522 7.17213 14.9798 5 12 5C11.5534 5 11.1183 5.04879 10.6995 5.14132M7.28746 7.28585C6.67317 8.06419 6.24759 8.99838 6.07974 10.0194C3.79151 10.2313 2 12.1564 2 14.5C2 16.9853 4.01472 19 6.5 19H17.5C17.9561 19 18.3963 18.9322 18.8112 18.806M3 3L21 21"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CloudOffIcon.displayName = 'CloudOffIcon';
