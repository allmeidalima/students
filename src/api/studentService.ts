// Toda a lógica relacionada a comunicação com a API (axios)

import axios from "axios";
import type { StudentModel } from "../types/StudentModel";

const API_URL = 'http://localhost:3001/students';

const apiClient = axios.create({
    baseURL: API_URL,
});

export const getStudents = () : Promise<StudentModel[]> => {
    return apiClient.get('/').then((res: { data: StudentModel[]; }) => res.data);
}

export const getStudentsById = (id: number) : Promise<StudentModel> =>{
    return apiClient.get(`/${id}`).then((res: { data: StudentModel; }) => res.data);
}

export const createStudent = (student: Omit<StudentModel, 'id'>) : Promise<StudentModel> =>{
    return apiClient.post('/', student).then((res: { data: StudentModel; }) => res.data);
}

export const updateStudent = (id: number, student: Partial<StudentModel>) : Promise<StudentModel> =>{
    return apiClient.patch(`/${id}`, student).then((res: { data: StudentModel; }) => res.data);
}
export const deleteStudent = (id: number,) : Promise<void> =>{
    return apiClient.delete(`/${id}`);
}

