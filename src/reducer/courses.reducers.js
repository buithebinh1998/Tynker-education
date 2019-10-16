export const courseReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_COURSE':
        return [...state, {
          title: action.book.title, 
          author: action.book.author,
        }
        ]
      case 'REMOVE_COURSE':
        return state.filter(book => book.id !== action.id);
      default:
        return state;
    }
  } 