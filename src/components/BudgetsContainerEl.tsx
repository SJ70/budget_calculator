import React, { useState } from 'react';
import InputsEl from './InputsEl';
import BudgetsListEl from './BudgetsListEl';
import './BudgetsContainerEl.css';
import { Budget } from '../class/Budget';

type BudgetsContainerProps = {
    budgets: Budget[]
    updateBudget: Function
    addBudget: Function
    deleteBudget: Function
    deleteAllBudgets: Function
    setStateType: Function
}

const BudgetsContainerEl: React.FC<BudgetsContainerProps> = ({budgets, updateBudget, addBudget, deleteBudget, deleteAllBudgets, setStateType}) => {

    const [title, setTitle] = useState("");
    const [cost, setCost] = useState(0);
    const [selectedBudgetId, setSelectedBudgetId] = useState(null);

    return (
        <div className='budgets-container'>
            <InputsEl title={title} setTitle={setTitle} cost={cost} setCost={setCost} selectedBudgetId={selectedBudgetId} setSelectedBudgetId={setSelectedBudgetId} updateBudget={updateBudget} addBudget={addBudget} setStateType={setStateType}/>
            <BudgetsListEl setSelectedBudgetId={setSelectedBudgetId} setTitle={setTitle} setCost={setCost} budgets={budgets} deleteBudget={deleteBudget} deleteAllBudgets={deleteAllBudgets} setStateType={setStateType}/>
        </div>
    )
}

export default BudgetsContainerEl;