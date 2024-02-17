import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik01IDE5VjVNMTYuNDAwNSA2LjA3OTYxTDEwLjU2MTcgMTAuNzUwNkMxMC4wMjc5IDExLjE3NzcgOS43NjA5NyAxMS4zOTEyIDkuNjY0MzMgMTEuNjQ5MkM5LjU3OTYgMTEuODc1NCA5LjU3OTYgMTIuMTI0NiA5LjY2NDMzIDEyLjM1MDhDOS43NjA5NyAxMi42MDg4IDEwLjAyNzkgMTIuODIyMyAxMC41NjE3IDEzLjI0OTRMMTYuNDAwNSAxNy45MjA0QzE3LjIzMjcgMTguNTg2MSAxNy42NDg3IDE4LjkxOSAxNy45OTg5IDE4LjkxOTRDMTguMzAzNSAxOC45MTk3IDE4LjU5MTYgMTguNzgxMiAxOC43ODE1IDE4LjU0MzJDMTkgMTguMjY5NSAxOSAxNy43MzY3IDE5IDE2LjY3MVY3LjMyOUMxOSA2LjI2MzMgMTkgNS43MzA0NSAxOC43ODE1IDUuNDU2NzdDMTguNTkxNiA1LjIxODc2IDE4LjMwMzUgNS4wODAzIDE3Ljk5ODkgNS4wODA2M0MxNy42NDg3IDUuMDgxIDE3LjIzMjcgNS40MTM4NyAxNi40MDA1IDYuMDc5NjFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const SkipBackIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M5 19V5M16.4005 6.07961L10.5617 10.7506C10.0279 11.1777 9.76097 11.3912 9.66433 11.6492C9.5796 11.8754 9.5796 12.1246 9.66433 12.3508C9.76097 12.6088 10.0279 12.8223 10.5617 13.2494L16.4005 17.9204C17.2327 18.5861 17.6487 18.919 17.9989 18.9194C18.3035 18.9197 18.5916 18.7812 18.7815 18.5432C19 18.2695 19 17.7367 19 16.671V7.329C19 6.2633 19 5.73045 18.7815 5.45677C18.5916 5.21876 18.3035 5.0803 17.9989 5.08063C17.6487 5.081 17.2327 5.41387 16.4005 6.07961Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

SkipBackIcon.displayName = 'SkipBackIcon';
