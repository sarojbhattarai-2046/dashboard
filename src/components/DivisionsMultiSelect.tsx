"use client"

import React, { useState } from 'react';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { divisions } from '@/lib/data';

interface Division {
    name: string;
    code: string;
}

interface DivisionsMultiSelectPropTypes {
    label: string;
}

const DivisionsMultiSelect: React.FC<DivisionsMultiSelectPropTypes> = ({ label }) => {
    const [selectedDivisions, setSelectedDivisions] = useState<Division[]>(divisions);

    const handleChange = (e: MultiSelectChangeEvent) => {
        setSelectedDivisions(e.value as Division[]);
    };

    return (
        <div className='flex flex-col mt-4'>
            <label className='text-xs mb-2'>{label}</label>
            <MultiSelect
                value={selectedDivisions}
                options={divisions}
                onChange={handleChange}
                optionLabel="name"
                placeholder="Select Divisions"
                display="chip"
                style={{ width: '20rem', border: '1px solid #7bdcb5' }}
                selectAllLabel='All'
            />
        </div>
    );
}

export default DivisionsMultiSelect;
