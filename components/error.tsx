import React from 'react';
import styles from './error.module.css';

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className={styles.errorContainer}>
            <strong>Error:</strong> {message}
        </div>
    );
};

export default Error;