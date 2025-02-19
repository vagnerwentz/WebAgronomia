import React from 'react';
import styles from './css/IconButton.module.css';

interface IconButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
    ariaLabel: string;
}

export function IconButton({ icon, onClick, ariaLabel }: IconButtonProps) {
    return (
        <button onClick={onClick} className={styles.iconButton} aria-label={ariaLabel}>
            {icon}
        </button>
    );
}
