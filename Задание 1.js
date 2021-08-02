let xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");
const nameNodes = listNode.querySelectorAll("name");
const firstNodes = listNode.querySelectorAll("first");
const secondNodes = listNode.querySelectorAll("second");
const ageNodes = listNode.querySelectorAll("age");
const profNodes = listNode.querySelectorAll("prof");

console.log(nameNodes);

const result = {
  list :[
    {
      name: firstNodes[0].textContent + " " + secondNodes[0].textContent,
      age: parseInt(ageNodes[0].textContent),
      prof: profNodes[0].textContent,
      lang: nameNodes[0].getAttribute("lang")
    },
    {
      name: firstNodes[1].textContent + " " + secondNodes[1].textContent,
      age: parseInt(ageNodes[1].textContent),
      prof: profNodes[1].textContent,
      lang: nameNodes[1].getAttribute("lang")
    }
  ]
};