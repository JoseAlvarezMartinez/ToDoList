const fechasNumericas = new Date().toLocaleDateString("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric"
})

export const fechaActual = fechasNumericas.split(" ").filter(e => e !== "de")