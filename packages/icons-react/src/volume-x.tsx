import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik0yMiA4Ljk5OTkzTDE2IDE0Ljk5OTlNMTYgOC45OTk5M0wyMiAxNC45OTk5TTkuNjM0MzIgNC4zNjU2MUw2LjQ2ODYzIDcuNTMxM0M2LjI5NTY4IDcuNzA0MjUgNi4yMDkyIDcuNzkwNzMgNi4xMDgyOCA3Ljg1MjU3QzYuMDE4ODEgNy45MDc0IDUuOTIxMjcgNy45NDc4IDUuODE5MjMgNy45NzIzQzUuNzA0MTQgNy45OTk5MyA1LjU4MTg1IDcuOTk5OTMgNS4zMzcyNiA3Ljk5OTkzSDMuNkMzLjAzOTk1IDcuOTk5OTMgMi43NTk5MiA3Ljk5OTkzIDIuNTQ2MDEgOC4xMDg5MkMyLjM1Nzg1IDguMjA0NzkgMi4yMDQ4NyA4LjM1Nzc3IDIuMTA4OTkgOC41NDU5NEMyIDguNzU5ODUgMiA5LjAzOTg3IDIgOS41OTk5M1YxNC4zOTk5QzIgMTQuOTYgMiAxNS4yNCAyLjEwODk5IDE1LjQ1MzlDMi4yMDQ4NyAxNS42NDIxIDIuMzU3ODUgMTUuNzk1MSAyLjU0NjAxIDE1Ljg5MDlDMi43NTk5MiAxNS45OTk5IDMuMDM5OTUgMTUuOTk5OSAzLjYgMTUuOTk5OUg1LjMzNzI2QzUuNTgxODUgMTUuOTk5OSA1LjcwNDE0IDE1Ljk5OTkgNS44MTkyMyAxNi4wMjc2QzUuOTIxMjcgMTYuMDUyMSA2LjAxODgxIDE2LjA5MjUgNi4xMDgyOCAxNi4xNDczQzYuMjA5MiAxNi4yMDkxIDYuMjk1NjggMTYuMjk1NiA2LjQ2ODYzIDE2LjQ2ODZMOS42MzQzMSAxOS42MzQyQzEwLjA2MjcgMjAuMDYyNiAxMC4yNzY5IDIwLjI3NjggMTAuNDYwOCAyMC4yOTEzQzEwLjYyMDMgMjAuMzAzOCAxMC43NzYzIDIwLjIzOTIgMTAuODgwMiAyMC4xMTc1QzExIDE5Ljk3NzMgMTEgMTkuNjc0NCAxMSAxOS4wNjg2VjQuOTMxM0MxMSA0LjMyNTQ4IDExIDQuMDIyNTcgMTAuODgwMiAzLjg4MjMxQzEwLjc3NjMgMy43NjA2MSAxMC42MjAzIDMuNjk2MDIgMTAuNDYwOCAzLjcwODU4QzEwLjI3NjkgMy43MjMwNSAxMC4wNjI3IDMuOTM3MjQgOS42MzQzMiA0LjM2NTYxWiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjY2NjY3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=)
 */
export const VolumeXIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M22 8.99993L16 14.9999M16 8.99993L22 14.9999M9.63432 4.36561L6.46863 7.5313C6.29568 7.70425 6.2092 7.79073 6.10828 7.85257C6.01881 7.9074 5.92127 7.9478 5.81923 7.9723C5.70414 7.99993 5.58185 7.99993 5.33726 7.99993H3.6C3.03995 7.99993 2.75992 7.99993 2.54601 8.10892C2.35785 8.20479 2.20487 8.35777 2.10899 8.54594C2 8.75985 2 9.03987 2 9.59993V14.3999C2 14.96 2 15.24 2.10899 15.4539C2.20487 15.6421 2.35785 15.7951 2.54601 15.8909C2.75992 15.9999 3.03995 15.9999 3.6 15.9999H5.33726C5.58185 15.9999 5.70414 15.9999 5.81923 16.0276C5.92127 16.0521 6.01881 16.0925 6.10828 16.1473C6.2092 16.2091 6.29568 16.2956 6.46863 16.4686L9.63431 19.6342C10.0627 20.0626 10.2769 20.2768 10.4608 20.2913C10.6203 20.3038 10.7763 20.2392 10.8802 20.1175C11 19.9773 11 19.6744 11 19.0686V4.9313C11 4.32548 11 4.02257 10.8802 3.88231C10.7763 3.76061 10.6203 3.69602 10.4608 3.70858C10.2769 3.72305 10.0627 3.93724 9.63432 4.36561Z"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

VolumeXIcon.displayName = 'VolumeXIcon';
