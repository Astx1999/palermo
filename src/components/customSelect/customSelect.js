import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.scss';
import { ChevronDown, ChevronUp } from 'lucide-react';

function CustomSelect({ options, value, onChange, placeholder, label, icon: Icon }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.customSelectWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.customSelect} ref={dropdownRef}>
                <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
                    {Icon && <Icon className={styles.icon} />}
                    <span>{value || placeholder || 'Select'}</span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {isOpen && (
                    <ul className={styles.options}>
                        {options.map((option) => (
                            <li
                                key={option}
                                className={`${styles.option} ${option === value ? styles.active : ''}`}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CustomSelect;
