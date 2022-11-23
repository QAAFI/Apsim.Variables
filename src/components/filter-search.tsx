import { useEffect, useRef, useState } from "react";
import { Badge, BadgeColor, Button, Dropdown, DropdownOption } from "./";
import { FaSearch } from 'react-icons/fa';

import { useOnClickOutside } from "../hooks/click-outside";


type BadgePosition = 'start' | 'end';

export interface FilterRes {
	[key: string]: string[]
}

type FilterProps = {
	id?: string;
	options: DropdownOption[];
	filterPlaceholder?: DropdownOption;
	placeholder?: string;
	onChange?: (values: FilterRes) => void;
	colorMap?: { [key: string]: BadgeColor };
	suggestions?: string[];
	getSelectedFilterIdx?: (idx: number) => void;
	badgePosition?: BadgePosition;
};

export const FilterSearch = ({
	id = 'nextgen',
	options = [],
	filterPlaceholder,
	placeholder,
	colorMap,
	onChange = (values: FilterRes) => null,
	suggestions = [],
	badgePosition = 'start',
	getSelectedFilterIdx = (idx: number) => null,
}: FilterProps) => {

	const [filterIdx, setFilterIdx] = useState<number>(0);
	const [search, setSearch] = useState('');
	const [searchValues, setSearchValues] = useState<{ [key: string]: string }[]>([]);  // to store internal filter (dynamic)
	const [badges, setBadges] = useState<string[][]>([]);  // to store badge info (static)
	const [expanded, setExpanded] = useState(false);
	const [existedValues, setExistedValues] = useState<FilterRes>({});

	const dropdownRef: React.LegacyRef<HTMLDivElement> = useRef(null);
	useOnClickOutside(dropdownRef, () => setExpanded(false));

	useEffect(() => {
		const response: FilterRes = {};
		searchValues.map(v => {
			const key = Object.keys(v)[0] ?? '';
			if (Object.keys(response).includes(key)) {
				response[key]?.push(v[key] ?? '');
			} else if (v && v[key]) {
				response[key] = [v[key] ?? ''];
			}
		})
		setExistedValues(response);
		onChange(response);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValues])

	const onClickSearch = () => {
		setExpanded(false);
		if (options.length <= 0 || !search) return;
		const currentValues = searchValues;
		const key = options[filterIdx]?.value ?? '';
		if (!key || !currentValues) return;

		const dupValue = currentValues.length > 0 && currentValues.map(v => !!v[key] && v[key] === search).reduce((prev, curr) => prev || curr);
		if (!dupValue) {
			currentValues.push({ [key]: search });
			setSearchValues([...currentValues]);

			// add new badges
			const currentBadges = badges;
			currentBadges.push([key, (options[filterIdx]?.extra ?? '') + search])
			setBadges([...currentBadges])
		}

		setSearch("");
	}

	const handleOnBadgeClose = (idx: number) => {
		const currentValue = searchValues;
		currentValue.splice(idx, 1)
		setSearchValues([...currentValue])

		const currentBadges = badges;
		currentBadges.splice(idx, 1)
		setBadges([...currentBadges])
	}

	const handleOnBackSpace = () => {
		if (badges && badges.length > 0 && search === '') {
			const badgeValue: string = options[badges?.[badges.length - 1]?.[0] ?? 0]?.extra ? (
				badges[badges.length - 1]?.[1]?.slice(1, badges[badges.length - 1]?.[1]?.length) ?? '') : (
				badges[badges.length - 1]?.[1] ?? '');
			setSearch(badgeValue)
			handleOnBadgeClose(badges.length - 1);
		}
	}

	const onSelectSuggestion = (value: string) => {
		setSearch(value ?? '')
		const input = document.getElementById(id);
		input?.focus();
	}

	const suggestionsList = (
		search ?
			suggestions.filter(v => {
				const isContainedMatch = v.toLowerCase().includes(search.toLowerCase());
				const isNotExactSame = search.toLowerCase() !== v.toLowerCase()
				return isContainedMatch && isNotExactSame;
			})
			:
			suggestions
		// Filter the existing one out from the suggestions
	).filter(v => !existedValues[options[filterIdx]?.value ?? '']?.map(exv => exv.toLowerCase()).includes(v.toLowerCase()) ?? false);

	return (
		<div className="flex relative shadow-sm border-gray-300 border rounded-md">
			<div className="">
				<Dropdown
					options={options}
					placeholder={filterPlaceholder}
					onSelect={(idx: number) => { setFilterIdx(idx); getSelectedFilterIdx(idx) }}
					selectedIndex={filterIdx}
					embedded='left'
					size="lg"
				/>
			</div>
			<div ref={dropdownRef} className="relative w-full">
				<div className="flex relative w-full bg-transparent">
					{badges.length > 0 && badgePosition === 'start' && <div className="pl-2 pt-1 flex gap-1 pointer-events-none">
						{badges.map((v, idx) => {
							const key = v[0] ?? '';
							const value = v[1];
							return (
								<div className="pointer-events-auto" key={`b-${key}-${value}`}>
									<Badge color={colorMap ? colorMap[key] : "green"} onClose={() => handleOnBadgeClose(idx)}>{value}</Badge>
								</div>
							)
						}
						)}
					</div>}
					<input
						type="text"
						id={id}
						className="w-full py-1 px-2 focus:outline-none focus:ring-0 appearance-none"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder={placeholder}
						onKeyDown={(e) => { if (e.key === 'Enter') { onClickSearch() }; if (e.key === 'Backspace') { handleOnBackSpace() }; }}
						autoComplete="off"
						onFocus={() => setExpanded(true)}
					/>
				</div>

				{badgePosition === 'end' && <div className="absolute w-full right-2 top-0 translate-y-[10%] flex flex-auto justify-end gap-1 pointer-events-none" onBlur={() => setExpanded(false)}>
					{badges.map((v, idx) => {
						const key = v[0] ?? '';
						const value = v[1];
						return (
							<div className="pointer-events-auto" key={`b-${key}-${value}`}>
								<Badge color={colorMap ? colorMap[key] : "green"} onClose={() => handleOnBadgeClose(idx)}>{value}</Badge>
							</div>
						)
					}
					)}
				</div>}

				{expanded && <div
					className="absolute max-h-[250px] overflow-y-scroll bottom-0 translate-y-[101%] z-20 w-full origin-top-right bg-white border border-gray-100 rounded-b-md shadow-lg"
					role="menu"
				>
					{suggestionsList.map((v, idx) => {
						return (
							<a href="#" key={`dropdown-${v}-${idx}`} onClick={() => onSelectSuggestion(v)} className="flex px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700">
								<div className="flex">
									<div className="">
										{v}
									</div>
								</div>
							</a>
						)
					})}

				</div>}
			</div>
			<Button className="self-center" variation="ghost" onClick={onClickSearch}>
				<FaSearch className="w-4 h-4"></FaSearch>
			</Button>
		</div>
	);
};