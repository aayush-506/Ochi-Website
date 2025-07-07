import React from 'react'
import Eyes from './Eyes';

const EyesEffect = () => {


    return (
        <div className='w-full h-screen overflow-hidden '>
            <div data-scroll data-scroll-speed="-.6" className=' relative w-full h-full bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>

                <Eyes />

            </div>
        </div>
    )
}

export default EyesEffect