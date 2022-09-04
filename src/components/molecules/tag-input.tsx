import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { Badge, BadgeColor } from "../atoms";
import { FloatingInput } from "../atoms/input";


type TagInputProps = {
	id?: string;
	label?: string;
	onChange: (value: string[]) => void;
	badgeColor?: BadgeColor;
	values?: string[];
	disabled?: boolean;
};

export const TagInput = ({
	id = 'tag-input',
	label,
	badgeColor,
	disabled = false,
	values = [],
	onChange = (value: string[]) => null
}: TagInputProps) => {

	const [search, setSearch] = useState('');
	const [filterValues, setFilterValues] = useState<string[]>([]);

	const handleOnPressEnter = () => {
		if (!search) return;
		const currentValues = filterValues;

		const dupValue = currentValues.length > 0 && (currentValues.includes(search));
		if (!dupValue) {
			currentValues.push(search);
			setFilterValues([...currentValues]);
			onChange(currentValues);
		}

		setSearch("");
	}

	useEffect(() => {
		setFilterValues(values)
	}, [values]);

	const handleOnBadgeClose = (idx: number) => {
		const currentValue = filterValues;
		currentValue.splice(idx, 1);
		setFilterValues([...currentValue]);
		document.getElementById(id)?.focus();
	}

	const handleBadgeOnClick = (idx: number) => {
		setSearch(filterValues[idx] ?? '');
		handleOnBadgeClose(idx);
		document.getElementById(id)?.focus();
	}


	const labelClass = filterValues.length > 0 ? '' :
		'peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4';
	return (
		<div className="flex relative w-full bg-transparent rounded-lg border border-gray-300 focus:border-gray-600">
			{filterValues.length > 0 &&
				<div className="pl-2 pt-1 flex gap-1 pointer-events-none">
					{filterValues.map((v, idx) => (
						<div className="pointer-events-auto" key={`tag-${idx}`} >
							<Badge color={badgeColor} onClose={() => handleOnBadgeClose(idx)} onClick={() => handleBadgeOnClick(idx)}>#{v}</Badge>
						</div>
					))}
				</div>}
			<input
				disabled={disabled}
				type='text'
				id={id}
				className='block px-2 pb-2 pt-2 w-full text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-0 appearance-none peer'
				placeholder=" "
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={e => { if (e.key === 'Enter') handleOnPressEnter() }}
				onBlur={() => handleOnPressEnter()}
			/>
			<label
				htmlFor="floating_outlined"
				className={`absolute cursor-text pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-1 ${labelClass}`}
			>
				{label}
			</label>
		</div>
	);
};