import axios from "axios";
import { ClassPayload } from "./Classes/types";

const API_URL = 'http://localhost:8080';

export function fetchTeachers() {
    return axios(`${API_URL}/teachers`)
}

export function saveClass(payload: ClassPayload){
    return axios.post(`${API_URL}/classes`, payload);
}