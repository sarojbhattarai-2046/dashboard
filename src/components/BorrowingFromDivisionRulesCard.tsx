import React from 'react'

import DivisionsMultiSelect from './DivisionsMultiSelect'
import PlayerBorrowingCard from './PlayerBorrowingCard'
import { Rule } from './BorrowingRulesCard'

interface BorrowingFromDivisionRulesCardProps {
    allDivisions: boolean;
    rules: Rule[];
    deleteRule: (id: string) => void;
}

const BorrowingFromDivisionRulesCard: React.FC<BorrowingFromDivisionRulesCardProps> = ({ allDivisions, rules, deleteRule }: BorrowingFromDivisionRulesCardProps) => {
  
    const renderDivisionRuleCard = (id: string) => {
        return(
            <div className="flex justify-between border rounded-lg border-gray p-3 bg-white" key={id}>
                    <div className='basis-2/5'>
                        {!allDivisions && <DivisionsMultiSelect label="Select division players are applied to"/>}
                    </div>
                <div className='basis-2/5'>
                    <PlayerBorrowingCard />
                </div>
                {!allDivisions && rules.length > 1 ? (
                    <button className='basis-5' onClick={() => deleteRule(id)}>
                        <img src="./delete.png" alt="delete_icon" height="16" width="16" />
                    </button>
                ): null}  
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-5'>
            {rules.map(rule => renderDivisionRuleCard(rule.id))}
        </div>
    )
}

export default BorrowingFromDivisionRulesCard