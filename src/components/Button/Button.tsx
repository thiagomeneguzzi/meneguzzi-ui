import React, { ReactNode } from "react";

import './Button.css';

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
};

export const Button = ({children, ...rest}: ButtonProps) => {
    return <button className='Button' {...rest}>{children}</button>;
};