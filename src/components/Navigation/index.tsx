import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className={'flex flex-col gap-4'}>
                    <li>
                        <Link to={'/compound'}>React: Compound</Link>
                    </li>
                    <li>
                        <Link to={'/advanced'}>React: Advanced</Link>
                    </li>
                    <li>
                        React: Animation
                        <ul className={'flex flex-col gap-1 pl-4'}>
                            <li>
                                <Link to={'/animation/parallax'}>
                                    React: Animation Parallax
                                </Link>
                            </li>
                            <li>
                                <Link to={'/animation/flip'}>
                                    React: Animation Flip
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/tables'}>React: Tables</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
