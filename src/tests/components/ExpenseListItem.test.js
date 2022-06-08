import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Render ExpenseListItem correctly',()=>{
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
  expect(wrapper).toMatchSnapshot();
})