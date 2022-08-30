import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { Badge, BadgeColor } from "../atoms";
import { FloatingInput } from "../atoms/input";


type TagInputProps = {
	label?: string;
	onChange: (value: string[]) => void;
	badgeColor?: BadgeColor;
	delay?: number;
};

export const TagInput = ({
	label,
	badgeColor,
	delay = 2000,
	onChange = (value: string[]) => null
}: TagInputProps) => {

	const [search, setSearch] = useState('');
	const [filterValues, setFilterValues] = useState<string[]>([]);

	const searchDebounce = useDebounce(search, delay);

	useEffect(() => {
		if (searchDebounce.length < 1) return;
		const currentValues = filterValues;

		const dupValue = currentValues.length > 0 && (searchDebounce in currentValues);
		if (!dupValue) {
			currentValues.push(searchDebounce);
			setFilterValues([...currentValues]);
			onChange(currentValues);
			setSearch("");
		}

	}, [searchDebounce])

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