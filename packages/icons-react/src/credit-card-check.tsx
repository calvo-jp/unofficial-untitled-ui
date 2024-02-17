import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xNiAxOEwxOCAyMEwyMiAxNk0yMiAxMEgyTTIyIDEyVjguMkMyMiA3LjA3OTkgMjIgNi41MTk4NCAyMS43ODIgNi4wOTIwMkMyMS41OTAzIDUuNzE1NyAyMS4yODQzIDUuNDA5NzQgMjAuOTA4IDUuMjE3OTlDMjAuNDgwMiA1IDE5LjkyMDEgNSAxOC44IDVINS4yQzQuMDc5OSA1IDMuNTE5ODQgNSAzLjA5MjAyIDUuMjE3OTlDMi43MTU3IDUuNDA5NzMgMi40MDk3MyA1LjcxNTY5IDIuMjE3OTkgNi4wOTIwMkMyIDYuNTE5ODQgMiA3LjA3OTkgMiA4LjJWMTUuOEMyIDE2LjkyMDEgMiAxNy40ODAyIDIuMjE3OTkgMTcuOTA4QzIuNDA5NzMgMTguMjg0MyAyLjcxNTY5IDE4LjU5MDMgMy4wOTIwMiAxOC43ODJDMy41MTk4NCAxOSA0LjA3OTkgMTkgNS4yIDE5SDEyIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const CreditCardCheckIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M16 18L18 20L22 16M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CreditCardCheckIcon.displayName = 'CreditCardCheckIcon';
