import React from 'react'
import Layout from '../Layout'
import CompoundList from './CompoundList.tsx'
import { range } from 'lodash'
import { faker } from '@faker-js/faker/locale/en'

type Option = { value: string; label: string }

const options: Option[] = range(5).map((_item) => ({
    value: faker.string.uuid(),
    label: faker.lorem.lines(),
}))

const Compound = () => {
    return (
        <Layout title={'React: Compound'}>
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                Практика:
                <mark className="px-2 ml-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                    Список
                </mark>{' '}
            </h2>
            <CompoundList>
                <CompoundList.List>
                    {options.map((option) => (
                        <CompoundList.Item option={option} />
                    ))}
                </CompoundList.List>
            </CompoundList>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                Практика:
                <mark className="px-2 ml-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                    Карточка
                </mark>{' '}
            </h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                Практика:
                <mark className="px-2 ml-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                    Табы
                </mark>{' '}
            </h2>
        </Layout>
    )
}

export default Compound
