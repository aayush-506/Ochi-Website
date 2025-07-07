import React,{useEffect, useState} from 'react'

const Eyes = () => {

    const [rotate, setrotate] = useState(0);

    useEffect(() => {

        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX);

            var value = angle * (180 / Math.PI);
            setrotate(value - 180);

        })


    })

    return (
        <>

            <div className='absolute flex justify-between top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[65%] w-[460px] h-[200px] '>

                <div className='flex items-center justify-center bg-zinc-100 h-[200px] w-[200px] rounded-full'>
                    <div className='bg-zinc-900 relative h-[120px] w-[120px] rounded-full'>

                        <span className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[45%] text-white'>PLAY</span>

                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute  top-1/2 left-1/2  w-full h-[18px] '>
                            <div className='bg-zinc-100 w-5 h-5 rounded-full'></div>
                        </div>

                    </div>
                </div>

                <div className='flex items-center justify-center bg-zinc-100 h-[200px] w-[200px] rounded-full'>
                    <div className='bg-zinc-900 relative h-[120px] w-[120px] rounded-full'>

                        <span className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[45%] text-white'>PLAY</span>

                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute top-1/2 left-1/2 w-full h-[18px] '>
                            <div className='bg-zinc-100 w-5 h-5 rounded-full'></div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Eyes