export function dateFormater(data: string) {
    const firstDateField = new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
    });

    const secondDateField = new Date(data).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return `${firstDateField} às ${secondDateField}`;
}