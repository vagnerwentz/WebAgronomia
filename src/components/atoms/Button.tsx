import styles from './css/Button.module.css';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    className?: string | undefined
}

export function Button({ label, onClick, className }: ButtonProps) {
    return (
        <button className={className || styles.button} onClick={onClick}>
            {label}
        </button>
    )
}