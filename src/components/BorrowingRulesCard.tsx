"use client"

import React from 'react'
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';

import BorrowingFromDivisionRulesCard from './BorrowingFromDivisionRulesCard';
import { divisions } from '@/lib/data';

export interface Rule {
    id: string;
    divisions: typeof divisions;
    borrowing: boolean;
    borrowingFrom: typeof divisions;
}

const initialBorrowingRule = {
    id: 'rule_1',
    divisions, 
    borrowing: true, 
    borrowingFrom: divisions
}

const BorrowingRulesCard: React.FC = () => {
    const [allDivisions, setAllDivisions ] = React.useState<boolean>(true)
    const [rules, setRules] = React.useState<Rule[]>([ initialBorrowingRule ])

    const addRule = () => {
        const newRule: Rule = { 
            ...initialBorrowingRule,
            id: `rule_${rules.length + 1}`,
        }
        setRules([...rules, newRule]);
    };

    const deleteRule = (id: string) => {
        const updatedRules = rules.filter(rule => rule.id !== id);
        setRules(updatedRules);
    };

    const handleCheckboxChange = (e: CheckboxChangeEvent) => {
        setAllDivisions(e.checked as boolean);
        setRules([initialBorrowingRule])
    }

    return (
        <div className="bg-[#f4f4f4] rounded-xl w-full h-full p-4">
            <div className='flex justify-between'>
                <h1 className="text-lg font-semibold my-5">Player Borrowing Restrictions</h1>
                <button className='block rounded text-white bg-[#7bdcb5] h-9 px-5 text-xs mt-4'>Save Changes</button>
            </div>
            
            <div className='flex flex-col'>
                <div className='all-div-checkbox my-5'>
                    <Checkbox
                        inputId="allDivision"
                        onChange={handleCheckboxChange}
                        checked={allDivisions}
                    />
                    <label htmlFor="allDivision" className="ml-2">All Divisions</label>
                </div>
                <BorrowingFromDivisionRulesCard 
                    allDivisions={allDivisions}
                    rules={rules}
                    deleteRule={deleteRule}
                />
                {!allDivisions && <button className='flex text-[#7bdcb5] hover:underline mt-5' onClick={addRule}> + Age Group/Division</button>}
            </div> 
        </div>
    )
}

export default BorrowingRulesCard