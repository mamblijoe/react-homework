import { Person } from '../types/type.ts'
import { range } from 'lodash'
import { faker } from '@faker-js/faker/locale/en'

export const defaultData: Person[] = range(200).map((_item) => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 20, max: 100 }),
    visits: faker.number.int({ min: 1, max: 1000 }),
}))
