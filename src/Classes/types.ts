export type Teacher = {
    id: number,
    name: string,
    subject: string,
    description: string,
    hourPrice: number,
    imageUri: string;
}

type TeacherId = {
    id: number;
}

export type ClassPayload = {
    teachers: TeacherId[];
}

