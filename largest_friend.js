var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var longestName = "";
var NameLength = 0;

for (var i = 0; i < friends.length; i++) {
  if (friends[i].length > NameLength) {
    longestName = friends[i];
    NameLength = friends[i].length;
  }
}

console.log("Friend with the longest name:", longestName);