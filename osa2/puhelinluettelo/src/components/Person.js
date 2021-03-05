import React from 'react'

const Person = ({ person, handleDelete}) => {

   
    console.log(person)
    return (
        <li>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button></li>
    )
}

export default Person