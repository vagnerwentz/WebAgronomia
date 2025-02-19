import styles from './css/Label.module.css';

type LabelProps = {
    text: string;
    htmlFor: string;
    className?: string | undefined;
}

export function Label({ text, htmlFor, className }: LabelProps) {
    return <label htmlFor={htmlFor} className={className || styles.label}>{text}</label>
}