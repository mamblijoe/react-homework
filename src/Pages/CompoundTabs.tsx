import React from 'react'
import { range } from 'lodash'
import { faker } from '@faker-js/faker/locale/en'
import CompoundTabs from '../components/Compound/CompoundTabs.tsx'
import Layout from '../components/Layout'

type Tab = { code: string; label: string; content: string }

const tabs: Tab[] = range(5).map((_item) => ({
    code: faker.string.uuid(),
    label: faker.string.alphanumeric(5),
    content: faker.lorem.lines(1),
}))

const CompoundTabsPage = () => {
    return (
        <Layout title={'React: Compound'}>
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

export default CompoundTabsPage
