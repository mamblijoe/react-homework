import React from 'react'
import Layout from '../Layout'
import CompoundList from './CompoundList.tsx'
import { range } from 'lodash'
import { faker } from '@faker-js/faker/locale/en'
import CompoundCard from './CompoundCard.tsx'
import CompoundTabs from './CompoundTabs.tsx'

type Option = { value: string; label: string }
type Tab = { code: string; label: string; content: string }

const options: Option[] = range(5).map((_item) => ({
    value: faker.string.uuid(),
    label: faker.lorem.lines(1),
}))

const tabs: Tab[] = range(5).map((_item) => ({
    code: faker.string.uuid(),
    label: faker.string.alphanumeric(5),
    content: faker.lorem.lines(1),
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
            <div className={'flex gap-4'}>
                <CompoundCard>
                    <CompoundCard.Category
                        category={faker.string.alphanumeric(5)}
                    />
                    <CompoundCard.Title title={faker.string.alphanumeric(5)} />
                    <CompoundCard.Text text={faker.lorem.lines(1)} />
                </CompoundCard>
                <CompoundCard>
                    <CompoundCard.Category
                        category={faker.string.alphanumeric(5)}
                    />
                    <CompoundCard.Image />
                    <CompoundCard.PriceBox>
                        <CompoundCard.Price
                            price={faker.number.int({
                                min: 100,
                                max: 1000,
                            })}
                        />
                    </CompoundCard.PriceBox>
                    <CompoundCard.Title title={faker.string.alphanumeric(5)} />
                </CompoundCard>
                <CompoundCard>
                    <CompoundCard.Image />
                    <CompoundCard.PriceBox>
                        <CompoundCard.Price
                            price={faker.number.int({
                                min: 100,
                                max: 1000,
                            })}
                        />
                    </CompoundCard.PriceBox>
                    <CompoundCard.Title title={faker.string.alphanumeric(5)} />
                    <CompoundCard.Text text={faker.lorem.lines(1)} />
                    <CompoundCard.Select options={options} />
                </CompoundCard>
                <CompoundCard>
                    <CompoundCard.Category
                        align="right"
                        category={faker.string.alphanumeric(5)}
                    />
                    <CompoundCard.PriceBox>
                        <CompoundCard.Price
                            price={faker.number.int({
                                min: 100,
                                max: 1000,
                            })}
                        />
                    </CompoundCard.PriceBox>
                    <CompoundCard.Title title={faker.string.alphanumeric(5)} />
                    <CompoundCard.Text text={faker.lorem.lines(1)} />
                    <CompoundCard.Select options={options} />
                </CompoundCard>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
                Практика:
                <mark className="px-2 ml-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                    Табы
                </mark>{' '}
            </h2>
            <CompoundTabs defaultTab={tabs[0].code}>
                <CompoundTabs.Triggers>
                    <CompoundTabs.Triggers>
                        {tabs.map((tab) => (
                            <CompoundTabs.Trigger tab={tab} />
                        ))}
                    </CompoundTabs.Triggers>
                </CompoundTabs.Triggers>
                <CompoundTabs.Contents>
                    {tabs.map((tab) => (
                        <CompoundTabs.Content tab={tab} />
                    ))}
                </CompoundTabs.Contents>
            </CompoundTabs>
        </Layout>
    )
}

export default Compound
