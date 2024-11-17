import React from 'react'
import Layout from '../components/Layout'
import CompoundCard from '../components/Compound/CompoundCard'
import { faker } from '@faker-js/faker/locale/en'
import { range } from 'lodash'

type Option = { value: string; label: string }

const options: Option[] = range(5).map((_item) => ({
    value: faker.string.uuid(),
    label: faker.lorem.lines(1),
}))

const CompoundCardPage = () => {
    return (
        <Layout title={'React: Compound'}>
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
        </Layout>
    )
}

export default CompoundCardPage
