$(document).ready(function () {
    var friends = ["Vince", "Milan", "Curtis", "Alex", "Brock"];
    var locations = ["Crankenstein", "Gus Fruh", "New Wall", "Insanity Wall", "Mossy Wall", "Awesome roof", "Monster Rock", "Med Wall", "Th Red", "HCR"];
    var weapons = ["Mossberg 12 guage", "Glock 9mm", "Rope", "Machete", "AK-47", "TNT", "Light Saber", "Garrote", "Rocket Launcher", "Axe", "Bat", "Brass Knuckles", "whip", "mace", "Cat of 9", "Fugu", "shield", "shuriken", "dart", "knife"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("main");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        var friend = friends[i % 5];
        var location = locations[i % 10];
        var weapon = weapons[i % 20];
        function accuAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuAlert;
    }
});