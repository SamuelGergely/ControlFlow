function getDayLoop(day) {
    let semaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for (i = 1; i < semaine.length; i++ )
    {
        if (day > 0 && day < 8 )
        {
            return semaine[day-1]
        }
        else{
            return "Numéro de jour invalide";
        }
    }

}
console.log(getDayLoop(1));