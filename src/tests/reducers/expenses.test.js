import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
  const state = expensesReducer(undefined,{type: '@@INT'})
  expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should remove expense by id not found', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
});

test('should add an expense',()=>{
  const expense = {
    id: 4,
    description: 'phone bill',
    note:'',
    amount: 5000,
    createdAt: 1000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
});

test('should edit expense',()=>{
  const description = 'credit card bill';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description)
});

test('should not edit expense if expense not found',()=>{

  const description = 'credit card bill';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});