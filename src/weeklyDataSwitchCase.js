function getDayIfSwitchCase(jour_semaine) {
    switch (jour_semaine){
        case 1:
            return "Lundi"
            break;
        case 2:
            return "Mardi"
            break;
        case 3:
            return "Mercredi"
            break;
        case 4:
            return "Jeudi"
            break;
        case 5:
            return "Vendredi"
            break;
        case 6:
            return "Samedi"
            break;
        case 7:
            return "Dimanche"
            break;
        default:
            return "Numéro de jour invalide"
    }
}

console.log(getDayIfSwitchCase(7));