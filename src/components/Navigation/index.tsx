import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/compound'}>React: Compound</Link>
                    </li>
                    <li>
                        <Link to={'/advanced'}>React: Advanced</Link>
                    </li>
                    <li>
                        <Link to={'/animation'}>React: Animation</Link>
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
