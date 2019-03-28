const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
     case 'SAMPLE_ACTION':
      return {
       result: action.payload
      }
     default:
      return state
    }
   }
