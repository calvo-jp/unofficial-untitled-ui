import * as React from 'react';

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSJ3aGl0ZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxwYXRoIGQ9Ik05Ljc1IDIwLjc1MDFMMTEuMjIzIDIxLjU2ODRDMTEuNTA2NiAyMS43MjYgMTEuNjQ4NCAyMS44MDQ3IDExLjc5ODYgMjEuODM1NkMxMS45MzE1IDIxLjg2MyAxMi4wNjg1IDIxLjg2MyAxMi4yMDE1IDIxLjgzNTZDMTIuMzUxNiAyMS44MDQ3IDEyLjQ5MzQgMjEuNzI2IDEyLjc3NyAyMS41Njg0TDE0LjI1IDIwLjc1MDFNNS4yNSAxOC4yNTAxTDMuODIyOTcgMTcuNDU3M0MzLjUyMzQ2IDE3LjI5MDkgMy4zNzM2OCAxNy4yMDc3IDMuMjY0NjMgMTcuMDg5M0MzLjE2ODE2IDE2Ljk4NDcgMy4wOTUxNSAxNi44NjA2IDMuMDUwNDggMTYuNzI1NEMzIDE2LjU3MjYgMyAxNi40MDEzIDMgMTYuMDU4NlYxNC41MDAxTTMgOS41MDAwOVY3Ljk0MTUzQzMgNy41OTg4OSAzIDcuNDI3NTcgMy4wNTA0OCA3LjI3NDc3QzMuMDk1MTUgNy4xMzk1OSAzLjE2ODE2IDcuMDE1NTEgMy4yNjQ2MyA2LjkxMDgyQzMuMzczNjggNi43OTI0OCAzLjUyMzQ1IDYuNzA5MjggMy44MjI5NyA2LjU0Mjg4TDUuMjUgNS43NTAwOU05Ljc1IDMuMjUwMDhMMTEuMjIzIDIuNDMxNzdDMTEuNTA2NiAyLjI3NDIxIDExLjY0ODQgMi4xOTU0MyAxMS43OTg2IDIuMTY0NTRDMTEuOTMxNSAyLjEzNzIxIDEyLjA2ODUgMi4xMzcyMSAxMi4yMDE1IDIuMTY0NTRDMTIuMzUxNiAyLjE5NTQzIDEyLjQ5MzQgMi4yNzQyMSAxMi43NzcgMi40MzE3N0wxNC4yNSAzLjI1MDA4TTE4Ljc1IDUuNzUwMDhMMjAuMTc3IDYuNTQyODhDMjAuNDc2NiA2LjcwOTI4IDIwLjYyNjMgNi43OTI0OCAyMC43MzU0IDYuOTEwODJDMjAuODMxOCA3LjAxNTUxIDIwLjkwNDkgNy4xMzk1OSAyMC45NDk1IDcuMjc0NzdDMjEgNy40Mjc1NyAyMSA3LjU5ODg5IDIxIDcuOTQxNTNWOS41MDAwOE0yMSAxNC41MDAxVjE2LjA1ODZDMjEgMTYuNDAxMyAyMSAxNi41NzI2IDIwLjk0OTUgMTYuNzI1NEMyMC45MDQ5IDE2Ljg2MDYgMjAuODMxOCAxNi45ODQ3IDIwLjczNTQgMTcuMDg5M0MyMC42MjYzIDE3LjIwNzcgMjAuNDc2NiAxNy4yOTA5IDIwLjE3NyAxNy40NTczTDE4Ljc1IDE4LjI1MDFNOS43NSAxMC43NTAxTDEyIDEyLjAwMDFNMTIgMTIuMDAwMUwxNC4yNSAxMC43NTAxTTEyIDEyLjAwMDFWMTQuNTAwMU0zIDcuMDAwMDhMNS4yNSA4LjI1MDA4TTE4Ljc1IDguMjUwMDhMMjEgNy4wMDAwOE0xMiAxOS41MDAxVjIyLjAwMDEiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS42NjY2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)
 */
export const CubeOutlineIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
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
					d="M9.75 20.7501L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L14.25 20.7501M5.25 18.2501L3.82297 17.4573C3.52346 17.2909 3.37368 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V14.5001M3 9.50009V7.94153C3 7.59889 3 7.42757 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37368 6.79248 3.52345 6.70928 3.82297 6.54288L5.25 5.75009M9.75 3.25008L11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7986 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L14.25 3.25008M18.75 5.75008L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42757 21 7.59889 21 7.94153V9.50008M21 14.5001V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L18.75 18.2501M9.75 10.7501L12 12.0001M12 12.0001L14.25 10.7501M12 12.0001V14.5001M3 7.00008L5.25 8.25008M18.75 8.25008L21 7.00008M12 19.5001V22.0001"
					stroke="currentColor"
					strokeWidth="1.66667"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);

CubeOutlineIcon.displayName = 'CubeOutlineIcon';
