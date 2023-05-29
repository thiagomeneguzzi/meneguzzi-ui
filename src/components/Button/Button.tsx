import React from "react";

import styles from './Button.scss'

export type ButtonProps = {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className={styles.Button}>{props.label}</button>;
};

export default Button;