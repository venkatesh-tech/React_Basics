import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((x) => <h2>{x}</h2>);
  //   return <div>{nameList}</div>;

  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 30,
      skill: "Js",
    },
    {
      id: 3,
      name: "Diana",
      age: 30,
      skill: "Full stack",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
