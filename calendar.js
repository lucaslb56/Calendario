let today = new Date()
let initialDate = new Date(today.getFullYear(), today.getMonth(), 1)
let finalDate = new Date(today.getFullYear(), today.getMonth()+1, 0) 
let daysWeek = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

function loadCalendar(start, end) {
    if (start instanceof Datetime && end instanceof Datetime){
        initialDate = start
        finalDate = end
    }
    let calendar = document.createElement('table')
    header = setHeaderCalendar()
    calendar.appendChild(header)

}

function setHeaderCalendar() {
    let header = document.createElement('thead')
    let row = document.createElement('tr')
    let cell
    for (let dayWeek of daysWeek){
        cell = document.createElement('td')
        cell.innerText = dayWeek
        row.appendChild(cell)
    }
    header.appendChild(row)
    return header
}

function setBodyCalendar() {
    let data = initialDate;
    let body = document.createElement('tbody')
    while(data <= finalDate){
        let row = document.createElement('tr')
        let cell;
        for (let dayWeek = 0; dayWeek < daysWeek.length; dayWeek++){
            cell = document.createElement('td')
            if (data.getDay() === dayWeek){
                cell.innerText = data.getDate()
                data.setDate(data.getDate()+1)
            }
            row.appendChild(cell)
        }  
        body.appendChild(row)
    }
    return body
      
}

console.log(setBodyCalendar())