import React from 'react';

type Props = {
    value: string;
    onChange: (v: string) => void;
};

export default function FormControl({ value, onChange }: Props): React.ReactElement {
    return React.createElement(
        'div',
        { className: 'center-full' },
        React.createElement(
            'div',
            { className: 'form-wrapper' },
            React.createElement(
                'div',
                { className: 'mb-3' },
                React.createElement(
                    'label',
                    { htmlFor: 'searchInput', className: 'form-label' },
                    'Team name'
                ),
                React.createElement('input', {
                    id: 'searchInput',
                    type: 'text',
                    className: 'form-control form-control-sm',
                    placeholder: 'e.g. Bayern Munich',
                    value,
                    onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)
                })
            )
        )
    );
}