/* eslint-disable no-undef */
import React, { createContext, useReducer, useContext } from 'react'

const GlobalState = createContext();
const GlobalDispatch = createContext();

const Reducer = (state, action) => {
    switch (action.type) {
        case 'theme':
            return {
                ...state,
                theme: action.theme
            }
            break;
        case 'login':
            return {
                ...state,
                logedin: action.logedin
            }
            break;

        default:
            throw new Error('specify action type');
            break;
    }
}

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, {
        theme: window.localStorage.getItem("theme") == null
            ? "light"
            : window.localStorage.getItem("theme"),
        logedin: window.localStorage.getItem("logedin") == null
            ? false
            : window.localStorage.getItem("logedin"),
    })

    return (
        <GlobalDispatch.Provider value={dispatch}>
            <GlobalState.Provider value={state}>
                {children}
            </GlobalState.Provider>
        </GlobalDispatch.Provider>
    )
}

export const useGlobalState = () => useContext(GlobalState);
export const useGlobalDispatch = () => useContext(GlobalDispatch);