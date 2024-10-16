import axios from 'axios';

const API_URL = 'https://www.femto.fun';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});


export const getNotes = () => apiClient.get('/note/square');
export const addNote = async (formData, token) => {
    return axios.post("https://www.femto.fun/note", formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
};
export const deleteNote = (noteId) => apiClient.delete(`/notes/${noteId}`);
