import { Teacher } from "./types";

export function checkIsSelected(selectedTeachers: Teacher[], teacher: Teacher) {
    return selectedTeachers.some(item => item.id === teacher.id);
}

export function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}