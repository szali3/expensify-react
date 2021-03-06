import selectExpenseTotal from "../../selectors/expense-total.js"
import expenses from "../fixtures/expenses"

test('should return 0 if not expenses', ()=> {
  const res = selectExpenseTotal([])
  expect(res).toBe(0);
});

test('should correctly add u single expense', ()=> {
  const res = selectExpenseTotal([expenses[0]])
  expect(res).toBe(195);
});

test('should add up multiple expense', ()=> {
  const res = selectExpenseTotal(expenses)
  expect(res).toBe(114195);
});