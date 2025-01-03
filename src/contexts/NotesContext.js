import {createContext, useContext} from "react"

export const NoteContext = createContext({
    notes: [
        {
            id: 1,
            title: " title msg",
            note: " note msg "
        }
    ],
    addNote: (note) => {},
    deleteNote: (id) => {}
})

export const useNote =() => {
    return useContext(NoteContext)
}

export const NoteProvider = NoteContext.Provider