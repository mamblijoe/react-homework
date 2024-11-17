import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { random } from 'lodash'
import { faker } from '@faker-js/faker/locale/en'
import Navigation from '../Navigation'

export default function ParallaxAnimation() {
    const parallax = useRef<IParallax>(null!)
    return (
        <div className={'min-w-full min-h-screen flex justify-center'}>
            <Parallax ref={parallax} pages={4}>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: '/giant-pizza-1.png',
                        backgroundSize: 'cover',
                    }}
                />

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '55%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.75}
                    speed={0.5}
                    style={{ opacity: 0.1 }}
                >
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '70%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '40%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '10%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.6}
                    speed={-0.1}
                    style={{ opacity: 0.4 }}
                >
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '60%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '25%',
                            marginLeft: '30%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '80%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.6}
                    speed={0.4}
                    style={{ opacity: 0.6 }}
                >
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '5%',
                        }}
                    />
                    <img
                        src={'/giant-pizza-1.png'}
                        style={{
                            display: 'block',
                            width: '15%',
                            marginLeft: '75%',
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <img src={'/giant-pizza-1.png'} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: '/giant-pizza-1.png',
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={'/giant-pizza-1.png'} style={{ width: '20%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <img src={'/giant-pizza-1.png'} style={{ width: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(3)}
                >
                    <div className={'flex flex-row gap-4 text-center'}>
                        <div
                            className={
                                'w-1/3 rounded-2xl bg-blue-950 p-4 flex flex-col gap-4'
                            }
                        >
                            <div>
                                <img src={'/giant-pizza-1.png'} />
                            </div>
                            <div className={'font-bold'}>
                                {faker.string.alphanumeric(5)}
                            </div>
                            <div>{faker.lorem.lines(1)}</div>
                        </div>
                        <div
                            className={
                                'w-1/3 rounded-2xl bg-blue-950 p-4 flex flex-col gap-4'
                            }
                        >
                            <div>
                                <img src={'/giant-pizza-1.png'} />
                            </div>
                            <div className={'font-bold'}>
                                {faker.string.alphanumeric(5)}
                            </div>
                            <div>{faker.lorem.lines(1)}</div>
                        </div>
                        <div
                            className={
                                'w-1/3 rounded-2xl bg-blue-950 p-4 flex flex-col gap-4'
                            }
                        >
                            <div>
                                <img src={'/giant-pizza-1.png'} />
                            </div>
                            <div className={'font-bold'}>
                                {faker.string.alphanumeric(5)}
                            </div>
                            <div>{faker.lorem.lines(1)}</div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0} factor={4}>
                    <div
                        className={
                            'min-h-screen flex justify-center items-center bg-blue-950'
                        }
                    >
                        <Navigation />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
