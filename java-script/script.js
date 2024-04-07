let Name = prompt("What's Your Name? :");

if (
  Name[0] === "A" ||
  Name[0] === "a" ||
  Name[0] === "E" ||
  Name[0] === "e" ||
  Name[0] === "I" ||
  Name[0] === "i" ||
  Name[0] === "O" ||
  Name[0] === "o" ||
  Name[0] === "U" ||
  Name[0] === "u"
) {
  alert(`Your Name starts with ხმოვანი! which starts with: ${Name[0]}`);
} else {
  alert(
    `Your Name doesnt starts with ხმოვანი! because it starts with: ${Name[0]}`
  );
}

//სხვანაირადაც შეიძლებოდა დაწერა else if-ითაც მაგრამ ასე ვარჩია
