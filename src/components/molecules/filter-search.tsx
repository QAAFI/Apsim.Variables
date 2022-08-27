import { useEffect, useState } from "react";
import { Badge, BadgeColor, Button, Dropdown, DropdownOption } from "../atoms";
import { FaSearch } from 'react-icons/fa';

export interface FilterRes {
	[key: string]: string[]
}

type FilterProps = {
	id?: string;
	options: DropdownOption[];
	filterPlaceholder?: DropdownOption;
	placeholder?: string;
	onChange?: (values: FilterRes) => void;
	colorMap?: { [key: string]: BadgeColor }
};

export const FilterSearch = ({
	id = 'nextgen',
	options = [],
	filterPlaceholder,
	placeholder,
	colorMap,
	onChange = (values: FilterRes) => null
}: FilterProps) => {

	const [filterIdx, setFilterIdx] = useState<number>(0);
	const [search, setSearch] = useState('');
	const [filterValues, setFilterValues] = useState<{ [key: string]: string }[]>([]);

	useEffect(() => {
		const response: FilterRes = {}
		filterValues.map(v => {
			const key = Object.keys(v)[0] ?? '';
			if (Object.keys(response).includes(key)) {
				response[key]?.push(v[key] ?? '')
			} else if (v && v[key]) {
				response[key] = [v[key] ?? '']
			}
		})
		onChange(response);
	}, [filterValues])

	const onClickSearch = () => {
		if (options.length <= 0 || !search) return;
		const currentValues = filterValues;
		const key = options[filterIdx]?.value ?? '';
		if (!key || !currentValues) return;

		const dupValue = currentValues.length > 0 && currentValues.map(v => !!v[key] && v[key] === search).reduce((prev, curr) => prev || curr)
		if (!dupValue) {
			currentValues.push({ [key]: search })
			setFilterValues([...currentValues])
		}

		setSearch("");
	}
	console.log(filterValues)
	const handleOnBadgeClose = (idx: number) => {
		const currentValue = filterValues;
		currentValue.splice(idx, 1)
		setFilterValues([...currentValue])
	}

	return (
		<div className="flex relative shadow-sm border-gray-300 border rounded-md">
			<div className="">
				<Dropdown
					options={options}
					placeholder={filterPlaceholder}
					onSelect={(idx: number) => setFilterIdx(idx)}
					selectedIndex={filterIdx}
					embedded='left'
				/>
			</div>
			<div className="relative w-full">
				<input
					type="text"
					id={id}
					className="w-full py-1 px-2"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder={placeholder}
					onKeyDown={(e) => { if (e.key === 'Enter') { onClickSearch() } }}
				/>

				<div className="absolute w-full right-2 top-0 translate-y-[10%] flex flex-auto justify-end gap-1 pointer-events-none">
					{filterValues.map((v, idx) => {
						const key = Object.keys(v)[0] ?? '';
						const value = v[key];
						return (
							<div className="pointer-events-auto" key={`b-${key}-${value}`}>
								<Badge closable color={colorMap ? colorMap[key] : "green"} onClose={() => handleOnBadgeClose(idx)}>{value}</Badge>
							</div>
						)
					}
					)}
				</div>
			</div>
			<Button className="self-center" variation="ghost" onClick={onClickSearch}>
				<FaSearch className="w-4 h-4"></FaSearch>
			</Button>
		</div>
	);
};