let hoje = new Date()
let mesAtual = hoje.getMonth()
let anoAtual = hoje.getFullYear()
let datainicial = new Date(anoAtual, mesAtual, 1)
let datafinal = new Date(anoAtual, mesAtual+1, 0) 
let calendar = []

function setCalendar(inicio, fim) {
    if ((inicio instanceof Date) && (fim instanceof Date)) {
       datainicial = inicio
       datafinal = fim
    }
    for (let data = datainicial; data <= datafinal; data.setDate(data.getDate() + 1)) {
        dia = {
            "data": new Date(data),
            "dia": data.getDate(),
            "diaSemana": data.getDay(),
            "eventos": []
        }
        calendar.push(dia) 
    }
}




