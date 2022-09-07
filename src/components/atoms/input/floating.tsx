import React, { useState } from "react";

interface FloatingInputProps {
	id?: string;
	value?: string;
	lable: string;
	onChange?: (value: string) => void
	disabled?: boolean;
	onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	floated?: boolean;
}


export const FloatingInput = ({
	id = "float-input",
	lable = "",
	value,
	onChange = (value: string) => null,
	disabled = false,
	onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => null,
	onBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => null,
	floated = false
}: FloatingInputProps) => {

	const labelClass = floated ? '' :
		'peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4';

	return (
		<div className="relative w-full">
			<input
				disabled={disabled}
				type="text"
				id={id}
				className="block px-2 pb-2 pt-2 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
				placeholder=" "
				value={value}
				onChange={ev => onChange(ev.target.value)}
				onKeyDown={e => { if (e.key === 'Enter') onPressEnter(e) }}
				onBlur={e => onBlur(e)}
			/>
			<label
				htmlFor="floating_outlined"
				className={`absolute cursor-text pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 left-1 ${labelClass}`}
			>
				{lable}
			</label>

		</div>
	);
}