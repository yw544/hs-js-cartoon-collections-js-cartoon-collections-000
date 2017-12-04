function dwarfRollCall(dwarves)
{
var ddwarf = [];

for (var i = 0; i < dwarves.length; i ++)
{ddwarf.push(i + 1 + ". " + dwarves[i] + " ")}

return ddwarf.join("");
}

function summonCaptainPlanet(planeteerCalls)
{
  var captain = [];

  for (var i = 0; i < planeteerCalls.length; i ++)
  {captain.push(planeteerCalls[i].toUpperCase + "!")

  }

return captain;
}

function longPlaneteerCalls(words)
{
for (var i = 0; i < words.length; i++)
{
  if (words[i].length > 4)
{
  return true
}
else
{
return false
}
}
}

function findTheCheese (foods)
{
for (var i = 0; i <foods.length; i++)
if (foods[i]==="cheddar" || foods[i]==="gouda" || foods[i]==="camembert")
{return foods[i]}

return "no cheese!"

}
