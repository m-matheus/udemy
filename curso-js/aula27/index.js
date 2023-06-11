let date = new Date();
let day = date.getDay();
let weekDay;


switch(day) {
    case 0:
        weekDay = 'Domingo';
        break;
    case 1:
        weekDay = 'Segunda';
        break;
    case 2:
        weekDay = 'Terça';
        break;
    case 3:
        weekDay = 'Quarta';
        break;
    case 4:
        weekDay = 'Quinta';
        break;
    case 5:
        weekDay = 'Sexta';
        break;
    case 6:
        weekDay = 'Sabado';
        break;
    default:
        weekDay = '';
        break;
}

console.log(weekDay);