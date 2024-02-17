import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMy4xMjE4IDE0Ljg0NDZMMTguMDAwNCAyMS45OTk5TTEwLjg3OSAxNC44NDQ2TDYuMDAwNDEgMjEuOTk5OU0xNC4wMDA0IDEzLjJDMTQuMDAwNCAxNC4zMDQ1IDEzLjEwNSAxNS4yIDEyLjAwMDQgMTUuMkMxMC44OTU4IDE1LjIgMTAuMDAwNCAxNC4zMDQ1IDEwLjAwMDQgMTMuMkMxMC4wMDA0IDEyLjA5NTQgMTAuODk1OCAxMS4yIDEyLjAwMDQgMTEuMkMxMy4xMDUgMTEuMiAxNC4wMDA0IDEyLjA5NTQgMTQuMDAwNCAxMy4yWk0xNy4xNDg5IDQuNTMyMjVMNS4zNjQ2MiA3LjY4OTg0QzUuMDk0MTQgNy43NjIzMiA0Ljk1ODg5IDcuNzk4NTUgNC44Njk2OSA3Ljg3ODg4QzQuNzkxMjIgNy45NDk1MyA0LjczNzEzIDguMDQzMjEgNC43MTUxOCA4LjE0NjQ5QzQuNjkwMjIgOC4yNjM5MSA0LjcyNjQ2IDguMzk5MTUgNC43OTg5MyA4LjY2OTY0TDUuNjc4OTIgMTEuOTUzOEM1Ljc1MTQgMTIuMjI0MyA1Ljc4NzYzIDEyLjM1OTUgNS44Njc5NiAxMi40NDg3QzUuOTM4NjEgMTIuNTI3MiA2LjAzMjI5IDEyLjU4MTMgNi4xMzU1NyAxMi42MDMyQzYuMjUyOTkgMTIuNjI4MiA2LjM4ODIzIDEyLjU5MTkgNi42NTg3MSAxMi41MTk1TDE4LjQ0MyA5LjM2MTg4TDE3LjE0ODkgNC41MzIyNVpNMjEuNzkyOCA5LjQ5OTU4QzIwLjcxMDkgOS43ODk0OSAyMC4xNjk5IDkuOTM0NDQgMTkuNzAwMiA5LjgzNDYxQzE5LjI4NzEgOS43NDY3OSAxOC45MTI0IDkuNTMwNDUgMTguNjI5OCA5LjIxNjU3QzE4LjMwODUgOC44NTk3NSAxOC4xNjM1IDguMzE4NzggMTcuODczNiA3LjIzNjg0TDE3LjcxODMgNi42NTcyOEMxNy40Mjg0IDUuNTc1MzUgMTcuMjgzNSA1LjAzNDM4IDE3LjM4MzMgNC41NjQ3MUMxNy40NzExIDQuMTUxNTggMTcuNjg3NSAzLjc3Njg2IDE4LjAwMTMgMy40OTQyNUMxOC4zNTgyIDMuMTcyOTYgMTguODk5MSAzLjAyODAxIDE5Ljk4MTEgMi43MzgxQzIwLjI1MTUgMi42NjU2MiAyMC4zODY4IDIuNjI5MzkgMjAuNTA0MiAyLjY1NDM0QzIwLjYwNzUgMi42NzYzIDIwLjcwMTIgMi43MzAzOCAyMC43NzE4IDIuODA4ODVDMjAuODUyMSAyLjg5ODA2IDIwLjg4ODQgMy4wMzMzIDIwLjk2MDkgMy4zMDM3OUwyMi4zNTg1IDguNTE5NzlDMjIuNDMxIDguNzkwMjcgMjIuNDY3MiA4LjkyNTUxIDIyLjQ0MjIgOS4wNDI5M0MyMi40MjAzIDkuMTQ2MjEgMjIuMzY2MiA5LjIzOTg5IDIyLjI4NzcgOS4zMTA1NUMyMi4xOTg1IDkuMzkwODcgMjIuMDYzMyA5LjQyNzExIDIxLjc5MjggOS40OTk1OFpNMy41MDIxMiAxMi4zM0w0Ljg1NDQxIDExLjk2NzdDNS4xMjQ5IDExLjg5NTIgNS4yNjAxNCAxMS44NTg5IDUuMzQ5MzUgMTEuNzc4NkM1LjQyNzgyIDExLjcwOCA1LjQ4MTkgMTEuNjE0MyA1LjUwMzg2IDExLjUxMUM1LjUyODgxIDExLjM5MzYgNS40OTI1OCAxMS4yNTgzIDUuNDIwMSAxMC45ODc5TDUuMDU3NzUgOS42MzU1NkM0Ljk4NTI4IDkuMzY1MDggNC45NDkwNCA5LjIyOTgzIDQuODY4NzIgOS4xNDA2M0M0Ljc5ODA2IDkuMDYyMTYgNC43MDQzOCA5LjAwODA3IDQuNjAxMSA4Ljk4NjEyQzQuNDgzNjggOC45NjExNiA0LjM0ODQ0IDguOTk3NCA0LjA3Nzk2IDkuMDY5ODhMMi43MjU2NiA5LjQzMjIyQzIuNDU1MTggOS41MDQ3IDIuMzE5OTMgOS41NDA5NCAyLjIzMDczIDkuNjIxMjZDMi4xNTIyNiA5LjY5MTkxIDIuMDk4MTcgOS43ODU1OSAyLjA3NjIyIDkuODg4ODhDMi4wNTEyNiAxMC4wMDYzIDIuMDg3NSAxMC4xNDE1IDIuMTU5OTggMTAuNDEyTDIuNTIyMzIgMTEuNzY0M0MyLjU5NDggMTIuMDM0OCAyLjYzMTA0IDEyLjE3IDIuNzExMzYgMTIuMjU5MkMyLjc4MjAxIDEyLjMzNzcgMi44NzU2OSAxMi4zOTE4IDIuOTc4OTggMTIuNDEzOEMzLjA5NjM5IDEyLjQzODcgMy4yMzE2MyAxMi40MDI1IDMuNTAyMTIgMTIuMzNaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNjY2NjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)
 */
export const TelescopeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M13.1218 14.8446L18.0004 21.9999M10.879 14.8446L6.00041 21.9999M14.0004 13.2C14.0004 14.3045 13.105 15.2 12.0004 15.2C10.8958 15.2 10.0004 14.3045 10.0004 13.2C10.0004 12.0954 10.8958 11.2 12.0004 11.2C13.105 11.2 14.0004 12.0954 14.0004 13.2ZM17.1489 4.53225L5.36462 7.68984C5.09414 7.76232 4.95889 7.79855 4.86969 7.87888C4.79122 7.94953 4.73713 8.04321 4.71518 8.14649C4.69022 8.26391 4.72646 8.39915 4.79893 8.66964L5.67892 11.9538C5.7514 12.2243 5.78763 12.3595 5.86796 12.4487C5.93861 12.5272 6.03229 12.5813 6.13557 12.6032C6.25299 12.6282 6.38823 12.5919 6.65871 12.5195L18.443 9.36188L17.1489 4.53225ZM21.7928 9.49958C20.7109 9.78949 20.1699 9.93444 19.7002 9.83461C19.2871 9.74679 18.9124 9.53045 18.6298 9.21657C18.3085 8.85975 18.1635 8.31878 17.8736 7.23684L17.7183 6.65728C17.4284 5.57535 17.2835 5.03438 17.3833 4.56471C17.4711 4.15158 17.6875 3.77686 18.0013 3.49425C18.3582 3.17296 18.8991 3.02801 19.9811 2.7381C20.2515 2.66562 20.3868 2.62939 20.5042 2.65434C20.6075 2.6763 20.7012 2.73038 20.7718 2.80885C20.8521 2.89806 20.8884 3.0333 20.9609 3.30379L22.3585 8.51979C22.431 8.79027 22.4672 8.92551 22.4422 9.04293C22.4203 9.14621 22.3662 9.23989 22.2877 9.31055C22.1985 9.39087 22.0633 9.42711 21.7928 9.49958ZM3.50212 12.33L4.85441 11.9677C5.1249 11.8952 5.26014 11.8589 5.34935 11.7786C5.42782 11.708 5.4819 11.6143 5.50386 11.511C5.52881 11.3936 5.49258 11.2583 5.4201 10.9879L5.05775 9.63556C4.98528 9.36508 4.94904 9.22983 4.86872 9.14063C4.79806 9.06216 4.70438 9.00807 4.6011 8.98612C4.48368 8.96116 4.34844 8.9974 4.07796 9.06988L2.72566 9.43222C2.45518 9.5047 2.31993 9.54094 2.23073 9.62126C2.15226 9.69191 2.09817 9.78559 2.07622 9.88888C2.05126 10.0063 2.0875 10.1415 2.15998 10.412L2.52232 11.7643C2.5948 12.0348 2.63104 12.17 2.71136 12.2592C2.78201 12.3377 2.87569 12.3918 2.97898 12.4138C3.09639 12.4387 3.23163 12.4025 3.50212 12.33Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

TelescopeIcon.displayName = 'TelescopeIcon';
