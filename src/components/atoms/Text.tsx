import styles from './css/Text.module.css';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Text({ children, className }: TextProps) {
  return <span className={className || styles.text}>{children}</span>;
}
