import React, { LegacyRef, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/click-outside";

import { FaCaretDown } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export type DropdownOption = {
	name: string;
	value?: string;
	iconPrefix?: IconType;
	iconSuffix?: IconType;
	extra?: string | number | object;
}

type Size = 'sm' | 'md' | 'lg';

type DropdownProps = {
	options: DropdownOption[],
	selectedIndex?: number;
	placeholder?: DropdownOption;
	id?: string;
	onSelect?: (idx: number) => void;
	embedded?: 'right' | 'left';
	size?: Size;
};

export const Dropdown = ({
	id = 'dropdown',
	selectedIndex,
	options,
	placeholder,
	onSelect = (idx: number) => null,
	embedded,
	size = 'md',
}: DropdownProps) => {
	const [expanded, setExpanded] = useState(false);

	const dropdownRef: LegacyRef<HTMLDivElement> = useRef(null);
	useOnClickOutside(dropdownRef, () => setExpanded(false));

	const borderClass = !embedded ? 'border rounded-md' : embedded === 'right' ? 'border-l-2 rounded-r-md' : 'border-r-2 rounded-l-md';
	const widthClass = size === 'sm' ? 'w-[120px]' : size === 'md' ? 'w-[150px]' : 'w-[180px]';

	return (
		<div id={id}
			className={`relative inline-flex items-stretch bg-white h-full border-gray-300 ${borderClass} ${widthClass}`}
			ref={dropdownRef}
		>
			<div
				className="relative flex flex-auto cursor-pointer w-full h-full"
				onClick={() => setExpanded(!expanded)}
			>
				<div className="relative inline-flex pl-4 py-1 text-sm text-gray-600 self-center">
					{selectedIndex != undefined ? options[selectedIndex]?.name : !selectedIndex && placeholder ? placeholder.name : ''}
				</div>
				<div className="grow" />
				<div className="relative inline-flex items-center justify-center h-full px-2 text-gray-600">
					<FaCaretDown className="w-4 h-4" />
				</div>
				{expanded && <div
					className="absolute bottom-0 translate-y-[103%] z-20 w-56 origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg"
					role="menu"
				>
					{options.map((option, idx) => {

						return (
							<a href="#" key={`dropdown-${option.value}-${idx}`} onClick={() => onSelect(idx)} className="flex px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
								{option.iconPrefix &&
									<div className="mr-2 self-center">
										<option.iconPrefix className="w-4 h-4" />
									</div>
								}

								<div className="flex">
									<div className="">
										{option.name}
									</div>
								</div>
								<div className="grow"></div>

								{option.iconSuffix &&
									<>
										<div className="justify-end">
											<option.iconSuffix className="w-4 h-4" />
										</div>
									</>
								}
							</a>
						)
					})}

				</div>}
			</div>
		</div>

	);
};