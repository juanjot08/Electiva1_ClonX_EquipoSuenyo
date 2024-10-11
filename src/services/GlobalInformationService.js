export function getDateInfo(){
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 70 }, (_, i) => currentYear - i);

    const months = [
        { name: 'Enero', value: 1 },
        { name: 'Febrero', value: 2 },
        { name: 'Marzo', value: 3 },
        { name: 'Abril', value: 4 },
        { name: 'Mayo', value: 5 },
        { name: 'Junio', value: 6 },
        { name: 'Julio', value: 7 },
        { name: 'Agosto', value: 8 },
        { name: 'Septiembre', value: 9 },
        { name: 'Octubre', value: 10 },
        { name: 'Noviembre', value: 11 },
        { name: 'Diciembre', value: 12 }
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return {
        years,
        months,
        days
    };
}