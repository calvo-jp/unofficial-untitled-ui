import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0xMCA3TDMgN00yMSA3TDE0IDdNMTQgNy4yNTE5NUMxNy40NTA1IDguMTQwMDQgMjAgMTEuMjcyMiAyMCAxNC45OTk5TTQgMTQuOTk5OUM0IDExLjI3MjIgNi41NDk1NSA4LjE0MDA0IDEwIDcuMjUxOTVNMy42IDE5SDQuNEM0Ljk2MDA1IDE5IDUuMjQwMDggMTkgNS40NTM5OSAxOC44OTFDNS42NDIxNSAxOC43OTUxIDUuNzk1MTMgMTguNjQyMiA1Ljg5MTAxIDE4LjQ1NEM2IDE4LjI0MDEgNiAxNy45NjAxIDYgMTcuNFYxNi42QzYgMTYuMDM5OSA2IDE1Ljc1OTkgNS44OTEwMSAxNS41NDZDNS43OTUxMyAxNS4zNTc4IDUuNjQyMTUgMTUuMjA0OSA1LjQ1Mzk5IDE1LjEwOUM1LjI0MDA4IDE1IDQuOTYwMDUgMTUgNC40IDE1SDMuNkMzLjAzOTk1IDE1IDIuNzU5OTIgMTUgMi41NDYwMSAxNS4xMDlDMi4zNTc4NSAxNS4yMDQ5IDIuMjA0ODcgMTUuMzU3OCAyLjEwODk5IDE1LjU0NkMyIDE1Ljc1OTkgMiAxNi4wMzk5IDIgMTYuNlYxNy40QzIgMTcuOTYwMSAyIDE4LjI0MDEgMi4xMDg5OSAxOC40NTRDMi4yMDQ4NyAxOC42NDIyIDIuMzU3ODUgMTguNzk1MSAyLjU0NjAxIDE4Ljg5MUMyLjc1OTkyIDE5IDMuMDM5OTUgMTkgMy42IDE5Wk0xMS42IDlIMTIuNEMxMi45NjAxIDkgMTMuMjQwMSA5IDEzLjQ1NCA4Ljg5MTAxQzEzLjY0MjIgOC43OTUxMyAxMy43OTUxIDguNjQyMTUgMTMuODkxIDguNDUzOTlDMTQgOC4yNDAwOCAxNCA3Ljk2MDA1IDE0IDcuNFY2LjZDMTQgNi4wMzk5NSAxNCA1Ljc1OTkyIDEzLjg5MSA1LjU0NjAxQzEzLjc5NTEgNS4zNTc4NSAxMy42NDIyIDUuMjA0ODcgMTMuNDU0IDUuMTA4OTlDMTMuMjQwMSA1IDEyLjk2MDEgNSAxMi40IDVIMTEuNkMxMS4wMzk5IDUgMTAuNzU5OSA1IDEwLjU0NiA1LjEwODk5QzEwLjM1NzggNS4yMDQ4NyAxMC4yMDQ5IDUuMzU3ODUgMTAuMTA5IDUuNTQ2MDFDMTAgNS43NTk5MiAxMCA2LjAzOTk1IDEwIDYuNlY3LjRDMTAgNy45NjAwNSAxMCA4LjI0MDA4IDEwLjEwOSA4LjQ1Mzk5QzEwLjIwNDkgOC42NDIxNSAxMC4zNTc4IDguNzk1MTMgMTAuNTQ2IDguODkxMDFDMTAuNzU5OSA5IDExLjAzOTkgOSAxMS42IDlaTTE5LjYgMTlIMjAuNEMyMC45NjAxIDE5IDIxLjI0MDEgMTkgMjEuNDU0IDE4Ljg5MUMyMS42NDIyIDE4Ljc5NTEgMjEuNzk1MSAxOC42NDIyIDIxLjg5MSAxOC40NTRDMjIgMTguMjQwMSAyMiAxNy45NjAxIDIyIDE3LjRWMTYuNkMyMiAxNi4wMzk5IDIyIDE1Ljc1OTkgMjEuODkxIDE1LjU0NkMyMS43OTUxIDE1LjM1NzggMjEuNjQyMiAxNS4yMDQ5IDIxLjQ1NCAxNS4xMDlDMjEuMjQwMSAxNSAyMC45NjAxIDE1IDIwLjQgMTVIMTkuNkMxOS4wMzk5IDE1IDE4Ljc1OTkgMTUgMTguNTQ2IDE1LjEwOUMxOC4zNTc4IDE1LjIwNDkgMTguMjA0OSAxNS4zNTc4IDE4LjEwOSAxNS41NDZDMTggMTUuNzU5OSAxOCAxNi4wMzk5IDE4IDE2LjZWMTcuNEMxOCAxNy45NjAxIDE4IDE4LjI0MDEgMTguMTA5IDE4LjQ1NEMxOC4yMDQ5IDE4LjY0MjIgMTguMzU3OCAxOC43OTUxIDE4LjU0NiAxOC44OTFDMTguNzU5OSAxOSAxOS4wMzk5IDE5IDE5LjYgMTlaTTIyIDdDMjIgNy41NTIyOCAyMS41NTIzIDggMjEgOEMyMC40NDc3IDggMjAgNy41NTIyOCAyMCA3QzIwIDYuNDQ3NzIgMjAuNDQ3NyA2IDIxIDZDMjEuNTUyMyA2IDIyIDYuNDQ3NzIgMjIgN1pNNCA3QzQgNy41NTIyOCAzLjU1MjI4IDggMyA4QzIuNDQ3NzIgOCAyIDcuNTUyMjggMiA3QzIgNi40NDc3MiAyLjQ0NzcyIDYgMyA2QzMuNTUyMjggNiA0IDYuNDQ3NzIgNCA3WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const BezierCurve01Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M10 7L3 7M21 7L14 7M14 7.25195C17.4505 8.14004 20 11.2722 20 14.9999M4 14.9999C4 11.2722 6.54955 8.14004 10 7.25195M3.6 19H4.4C4.96005 19 5.24008 19 5.45399 18.891C5.64215 18.7951 5.79513 18.6422 5.89101 18.454C6 18.2401 6 17.9601 6 17.4V16.6C6 16.0399 6 15.7599 5.89101 15.546C5.79513 15.3578 5.64215 15.2049 5.45399 15.109C5.24008 15 4.96005 15 4.4 15H3.6C3.03995 15 2.75992 15 2.54601 15.109C2.35785 15.2049 2.20487 15.3578 2.10899 15.546C2 15.7599 2 16.0399 2 16.6V17.4C2 17.9601 2 18.2401 2.10899 18.454C2.20487 18.6422 2.35785 18.7951 2.54601 18.891C2.75992 19 3.03995 19 3.6 19ZM11.6 9H12.4C12.9601 9 13.2401 9 13.454 8.89101C13.6422 8.79513 13.7951 8.64215 13.891 8.45399C14 8.24008 14 7.96005 14 7.4V6.6C14 6.03995 14 5.75992 13.891 5.54601C13.7951 5.35785 13.6422 5.20487 13.454 5.10899C13.2401 5 12.9601 5 12.4 5H11.6C11.0399 5 10.7599 5 10.546 5.10899C10.3578 5.20487 10.2049 5.35785 10.109 5.54601C10 5.75992 10 6.03995 10 6.6V7.4C10 7.96005 10 8.24008 10.109 8.45399C10.2049 8.64215 10.3578 8.79513 10.546 8.89101C10.7599 9 11.0399 9 11.6 9ZM19.6 19H20.4C20.9601 19 21.2401 19 21.454 18.891C21.6422 18.7951 21.7951 18.6422 21.891 18.454C22 18.2401 22 17.9601 22 17.4V16.6C22 16.0399 22 15.7599 21.891 15.546C21.7951 15.3578 21.6422 15.2049 21.454 15.109C21.2401 15 20.9601 15 20.4 15H19.6C19.0399 15 18.7599 15 18.546 15.109C18.3578 15.2049 18.2049 15.3578 18.109 15.546C18 15.7599 18 16.0399 18 16.6V17.4C18 17.9601 18 18.2401 18.109 18.454C18.2049 18.6422 18.3578 18.7951 18.546 18.891C18.7599 19 19.0399 19 19.6 19ZM22 7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7C20 6.44772 20.4477 6 21 6C21.5523 6 22 6.44772 22 7ZM4 7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6C3.55228 6 4 6.44772 4 7Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

BezierCurve01Icon.displayName = 'BezierCurve01Icon';
