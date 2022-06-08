import moment from 'moment'
import filtersReducer from "../../reducers/filters"

test('Should setup defualt filter valutes' , ()=>{
  const state = filtersReducer(undefined,{ type: '@@init' });
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('Should set sortBy amount', ()=>{
  const state = filtersReducer(undefined,{ type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date',()=>{
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState,action)
  expect(state.sortBy).toBe('date')
});

test('should set text filter',()=>{
  const text = 'hello'
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined,action)
  expect(state.text).toBe('hello')
});

test('should set startDate filter',()=>{
  const startDate = moment();
  const action = { 
    type: 'SET_START_DATE',
    startDate
  };
  const state = filtersReducer(undefined,action)
  expect(state.startDate).toEqual(moment())
});

test('should set endDate filter',()=>{
  const endDate = moment();
  const action = { 
    type: 'SET_END_DATE',
    endDate
  };
  const state = filtersReducer(undefined,action)
  expect(state.endDate).toEqual(endDate)
});