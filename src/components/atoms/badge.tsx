import React from "react";

import { FaTimes } from 'react-icons/fa';

export type BadgeColor = "green" | 'red' | 'yellow' | 'orange' | 'blue';

interface BadgeProps {
	children: React.ReactNode;
	color?: BadgeColor;
	onClose?: () => void;
	onClick?: () => void;
}
export const Badge = ({
	children,
	color = 'blue',
	onClose,
	onClick = () => null,
}: BadgeProps) => {
	let colorClass = ""
	switch (color) {
		case 'green':
			colorClass = "bg-green-100";
			break;
		case 'orange':
			colorClass = "bg-orange-100";
			break;
		case 'yellow':
			colorClass = "bg-yellow-100";
			break
		case 'red':
			colorClass = "bg-red-100";
			break;
		case 'blue':
			colorClass = "bg-blue-100";
			break;
		default:
			colorClass = "bg-gray-100 dark:bg-gray-100";
			break;
	}

	return (
		<div className="">
			<span className={`inline-flex whitespace-nowrap text-gray-800 text-xs font-semibold rounded dark:text-gray-500 px-2.5 py-0.5 ${colorClass}`}>
				<div onClick={onClick}>
					{children}
				</div>
				{onClose && (
					<div className="cursor-pointer" onClick={onClose}>
						<FaTimes className="w-4 h-4" />
					</div>
				)}
			</span>
		</div>
	);
}