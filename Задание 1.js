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

let list = [];

studentNodes.forEach((item, index) => {
  list.push({
    name: `${firstNodes[index].textContent} ${secondNodes[index].textContent}`,
    age: Number(ageNodes[index].textContent),
    prof: profNodes[index].textContent,
    lang: nameNodes[index].getAttribute("lang")
  });
});

const result = {
  list: list
};

