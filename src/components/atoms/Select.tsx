type SelectProps = {
    value: string;
    onChange: (value: string) => void;
    options: { value: number, label: string}[];
    selectClassName?: string | undefined
}

export function Select({ value, onChange, options, selectClassName}: SelectProps) {
    return (
        <select className={selectClassName} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
        </select>
    )
}