import React, { useState } from 'react'
import Layout from '../Layout'
import {
    useSpring,
    a,
    useSpringRef,
    useChain,
    useTransition,
} from '@react-spring/web'

const FlipAnimation = () => {
    const [flipped, setFlipped] = useState({
        1: false,
        2: false,
        3: false,
    })

    const isDone = Object.values(flipped).filter(Boolean).length === 3

    const flip1 = useSpring({
        opacity: isDone ? 0 : flipped['1'] ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped['1'] ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    const flip2 = useSpring({
        opacity: flipped['2'] ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped['2'] ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    const flip3 = useSpring({
        opacity: flipped['3'] ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped['3'] ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <Layout title={'React: Animation'}>
            <div className={'flex gap-4'}>
                <div
                    className={'cursor-pointer size-40 relative'}
                    onClick={() =>
                        setFlipped((prev) => ({ ...prev, 1: !prev['1'] }))
                    }
                >
                    <a.div
                        style={{
                            background: 'url(/pizza-1.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip1.opacity.to((o) => 1 - o),
                            transform: flip1.transform,
                        }}
                        className={'w-full h-full absolute'}
                    />
                    <a.div
                        style={{
                            background: 'url(/pizza-2.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip1.opacity,
                            transform: flip1.transform,
                            rotateX: '180deg',
                        }}
                        className={'w-full h-full absolute'}
                    />
                </div>
                <div
                    className={'cursor-pointer size-40 relative'}
                    onClick={() =>
                        setFlipped((prev) => ({ ...prev, 2: !prev['2'] }))
                    }
                >
                    <a.div
                        style={{
                            background: 'url(/pizza-1.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip2.opacity.to((o) => 1 - o),
                            transform: flip2.transform,
                        }}
                        className={'w-full h-full absolute'}
                    />
                    <a.div
                        style={{
                            background: 'url(/pizza-2.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip2.opacity,
                            transform: flip2.transform,
                            rotateX: '180deg',
                        }}
                        className={'w-full h-full absolute'}
                    />
                </div>
                <div
                    className={'cursor-pointer size-40 relative'}
                    onClick={() =>
                        setFlipped((prev) => ({ ...prev, 3: !prev['3'] }))
                    }
                >
                    <a.div
                        style={{
                            background: 'url(/pizza-1.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip3.opacity.to((o) => 1 - o),
                            transform: flip3.transform,
                        }}
                        className={'w-full h-full absolute'}
                    />
                    <a.div
                        style={{
                            background: 'url(/pizza-2.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: flip3.opacity,
                            transform: flip3.transform,
                            rotateX: '180deg',
                        }}
                        className={'w-full h-full absolute'}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default FlipAnimation
