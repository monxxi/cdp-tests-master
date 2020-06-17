#!/usr/bin/env node


const filterAnimals = (data, filterTerm) => {

    return data.filter(country => {
        country.people = country.people.filter(
            person => {
                person.animals=person.animals.filter(animal => animal.name.match(new RegExp(filterTerm)));

                return person.animals.length > 0
            });
        return country.people.length > 0;
    });
};

module.exports = {filterAnimals}
