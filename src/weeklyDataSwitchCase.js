function getDayIfSwitchCase(jour_semaine) {
    switch (jour_semaine){
        case 1:
            return "Lundi"
        case 2:
            return "Mardi"
        case 3:
            return "Mercredi"
        case 4:
            return "Jeudi"
        case 5:
            return "Vendredi"
        case 6:
            return "Samedi"
        case 7:
            return "Dimanche"
        default:
            return "Numéro de jour invalide"
    }
}

console.log(getDayIfSwitchCase(5));