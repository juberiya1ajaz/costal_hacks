import { useState } from 'react';
import ColvaBeachImg from "../assets/colva_beach.jpg"
import DonaPaulaImg from "../assets/dona_paula.jpg"
import GalgibagaImg from "../assets/galgibaga.jpg"
import MorjimImg from "../assets/morjim.jpg"
import PaloemImg from "../assets/paloem.jpg"
import VagatorImg from "../assets/vagator.jpg"

export default function Visits() {

    const [buttonText, setButtonText] = useState('Not Visited');

    function handleClick() {
        setButtonText('Visited');
    }

    return (
        <div>

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-semibold text-white">Visits</h1>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={ColvaBeachImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Colva Beach</p>
                            <button className={`text-white py-2 px-8 rounded-md text-xl md:text-2xl ${buttonText === 'Visited' ? 'bg-secondary' : 'bg-red-500'}`} onClick={handleClick}>{buttonText}</button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={DonaPaulaImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Dona Paula Beach</p>
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-red-500' >Not Visited</button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={GalgibagaImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Galgibaga Beach</p>
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-red-500' >Not Visited</button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={MorjimImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Morjim Beach</p>
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-red-500' >Not Visited</button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={PaloemImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Paloem Beach</p>
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-red-500' >Not Visited</button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-4 bg-gray-200 border-secondary rounded-lg">
                        <img src={VagatorImg} height="300" width="300" alt="TicTbeachacToe" />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                            <p className="">Vagator Beach</p>
                            <button className='text-white py-2 px-8 rounded-md text-xl md:text-2xl bg-red-500' >Not Visited</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
