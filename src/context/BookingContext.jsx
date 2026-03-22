import { createContext, useReducer, useCallback } from 'react';

export const BookingContext = createContext();

const initialState = {
  bookings: [],
  user: null,
  favorites: [],
};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKING':
      return {
        ...state,
        bookings: [...state.bookings, { ...action.payload, id: Date.now() }],
      };
    case 'REMOVE_BOOKING':
      return {
        ...state,
        bookings: state.bookings.filter(b => b.id !== action.payload),
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(f => f !== action.payload),
      };
    default:
      return state;
  }
};

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  // Using useCallback as required
  const addBooking = useCallback((bookingData) => {
    dispatch({ type: 'ADD_BOOKING', payload: bookingData });
  }, []);

  const removeBooking = useCallback((bookingId) => {
    dispatch({ type: 'REMOVE_BOOKING', payload: bookingId });
  }, []);

  const setUser = useCallback((userData) => {
    dispatch({ type: 'SET_USER', payload: userData });
  }, []);

  const addFavorite = useCallback((hotelId) => {
    dispatch({ type: 'ADD_FAVORITE', payload: hotelId });
  }, []);

  const removeFavorite = useCallback((hotelId) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: hotelId });
  }, []);

  const value = {
    state,
    addBooking,
    removeBooking,
    setUser,
    addFavorite,
    removeFavorite,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
