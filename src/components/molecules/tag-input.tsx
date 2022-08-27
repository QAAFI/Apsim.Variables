import { useEffect, useState } from "react";
import { Badge, BadgeColor, Button, Dropdown, DropdownOption } from "../atoms";
import { FaSearch } from 'react-icons/fa';
import { FloatingInput } from "../atoms/input";


type TagInputProps = {
	label?: string;
	onChange: (value: string[]) => void;
	badgeColor?: BadgeColor;
};

export const TagInput = ({
	label,
	badgeColor,
	onChange = (value: string[]) => null
}: TagInputProps) => {

	const [search, setSearch] = useState('');
	const [filterValues, setFilterValues] = useState<string[]>([]);


	const handleOnPressEnter = () => {
		if (!search) return;
		const currentValues = filterValues;

		const dupValue = currentValues.length > 0 && (search in currentValues);
		if (!dupValue) {
			currentValues.push(search);
			setFilterValues([...currentValues]);
			onChange(currentValues);
		}

		setSearch("");
	}

	const handleOnBadgeClose = (idx: number) => {
		const currentValue = filterValues;
		currentValue.splice(idx, 1)
		setFilterValues([...currentValue])
	}


	return (
		<div className="flex relative">
			<div className="relative w-full">
				<FloatingInput
					lable={label ?? ''}
					value={search}
					onChange={(value: string) => setSearch(value)}
					onPressEnter={handleOnPressEnter}
				/>
				<div className="absolute w-full right-2 top-0 translate-y-[25%] flex flex-auto justify-end gap-1 pointer-events-none">
					{filterValues.map((v, idx) => (
						<div className="pointer-events-auto" key={`tag-${idx}`}>
							<Badge closable color={badgeColor} onClose={() => handleOnBadgeClose(idx)}>#{v}</Badge>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};