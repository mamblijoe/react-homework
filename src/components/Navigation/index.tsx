import React from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
    {
        to: '/advanced',
        label: 'React: Advanced',
    },
    {
        to: '/tables',
        label: 'React: Tables',
    },
    {
        to: '/animation',
        label: 'React: Animation',
        subLinks: [
            { to: '/parallax', label: 'Parallax' },
            { to: '/flip', label: 'Flip' },
        ],
    },
    {
        to: '/compound',
        label: 'React: Compound',
        subLinks: [
            { to: '/list', label: 'List' },
            { to: '/card', label: 'Card' },
            { to: '/tabs', label: 'Tabs' },
        ],
    },
]

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className={'flex flex-col gap-4'}>
                    {LINKS.map((link) => {
                        if (link.subLinks) {
                            return link.subLinks.map((subLink) => (
                                <li>
                                    <Link
                                        to={link.to + subLink.to}
                                        key={link.to + subLink.to}
                                    >
                                        {link.label} - {subLink.label}
                                    </Link>
                                </li>
                            ))
                        }

                        return (
                            <li>
                                <Link to={link.to} key={link.to}>
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
