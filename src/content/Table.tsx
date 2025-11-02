import React from 'react';

type Props = {
    data?: any[] | null;
};

export default function Table({ data }: Props): React.ReactElement {
    if (!data || data.length === 0) {
        return <div className="p-3">No results</div>;
    }

    const rows = Array.isArray(data) ? data : [data];
    const cols = Object.keys(rows[0] || {});

    return (
        <table className="table">
            <thead>
                <tr>
                    {cols.map((col) => (
                        <th key={col} scope="col">
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {cols.map((col) => (
                            <td key={col}>{String(row[col] ?? '')}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
