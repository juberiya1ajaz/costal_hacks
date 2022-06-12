import CleanBeach from "./DirtyBeach"
import { Link } from "react-router-dom"

export default function Upload() {

    return (
        <div>

            <div className="grid place-items-center py-5">
                <h1 className="text-5xl font-semibold text-white">Upload</h1>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
            </div>

            <div className='grid place-items-center py-2 px-4'>
                <p className="text-white text-xl text-center">Upload an image of a dirty beach, and then an image of a clean beach. Once the ML model identifies the correct difference user will get an NFT using which they can mine it and earn some cryptos.</p>
            </div>

            <div>
                <CleanBeach />
            </div>

            <div className="grid place-items-center py-5">
                <Link to="/nft/my-nfts">
                    <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl'>My NFT's</button>
                </Link>
            </div>

        </div>
    )
}
