import React, { useState } from 'react';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import DivisionsMultiSelect from './DivisionsMultiSelect';

const PlayerBorrowingCard: React.FC = () => {
    const [borrowing, setBorrowing] = useState<string>("borrowing");

    const handleRadioChange = (e: RadioButtonChangeEvent) => {
        setBorrowing(e.value as string);
    };

    return (
        <>
            <div className="radio flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton
                        inputId="borrowing"
                        name="Borrowing"
                        value="borrowing"
                        onChange={handleRadioChange}
                        checked={borrowing === 'borrowing'}
                    />
                    <label htmlFor="borrowing" className="ml-2">Borrowing</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton
                        inputId="notBorrowing"
                        name="Not Borrowing"
                        value="notBorrowing"
                        onChange={handleRadioChange}
                        checked={borrowing === 'notBorrowing'}
                    />
                    <label htmlFor="notBorrowing" className="ml-2">Not Borrowing</label>
                </div>
            </div>
            {borrowing === 'borrowing' && (<DivisionsMultiSelect label="Select division players who can be borrowed from"/>)}
        </>
    );
}

export default PlayerBorrowingCard;
