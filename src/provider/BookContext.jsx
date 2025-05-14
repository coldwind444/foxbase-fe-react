import { createContext, useContext, useEffect, useState } from "react";
import { getBookById } from "../api/bookApi";

const BookContext = createContext();

export default function BookProvider({ children }) {
    const [bookData, setBookData] = useState(null);
    const [id, setId] = useState(() => localStorage.getItem('bookId'));
    const [bookLoading, setBookLoading] = useState(false)

    useEffect(() => {
        if (id) {
            localStorage.setItem("bookId", id);
        } else {
            localStorage.removeItem("bookId");
        }
    }, [id]);

    useEffect(() => {
        const fetchBook = async () => {
            if (!id) return
            try {
                setBookLoading(true)
                const response = await getBookById(id);
                setBookData(response.data);
            } catch (err) {
                console.error("Failed to fetch book:", err);
            } finally {
                setBookLoading(false)
            }
        };

        fetchBook();
    }, [id]);

    return (
        <BookContext.Provider value={{ id, setId, bookData, setBookData, bookLoading }}>
            {children}
        </BookContext.Provider>
    );
}

export const useBook = () => useContext(BookContext);
