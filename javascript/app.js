#!/usr/bin/env node


const filterAnimals = (data, filterTerm) => {

    const filterAnimalName = (animal) => {
        return animal.name.match(new RegExp(filterTerm));
    }

    return data.filter(country => {
        country.people = country.people.filter(
            person => {
                person.animals = person.animals.filter(animal => filterAnimalName(animal));
                return person.animals.length > 0
            });
        return country.people.length > 0;
    });
};

const count = (data) => {

};

const cmd = (input, arg) => {
    let filterRegex = /^(--filter=(.+))$/;
    if (arg.match(filterRegex)) {
        return filterAnimals(input, arg.match(filterRegex)[2]);
    }


    return input;
}

module.exports = {filterAnimals, count, cmd}
