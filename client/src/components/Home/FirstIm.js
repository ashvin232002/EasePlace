import Typed from 'react-typed';

function FirstIm(){
    return(
       <div className='bg-[#040506] w-full py-[150px]'>
            <div className='max-w-[1240px] mx-auto text-center font-bold '>
                <div className="text-white text-xl md:text-3xl md:p-[24px]">
                    Welcome !!.
                </div>
                <h2 className="text-white  text-2xl md:text-[60px] md:p-[24px]">To The Project Handler.</h2>
                <div className="text--[20px] md:text-[50px] text-white font-bold md:p-[24px]">
                    Book
                    <Typed
                        className='pl-3'
                        strings = {['Your Ride Now...','Your Delivery Now...']}
                        typeSpeed={100}
                        loop={true}
                        backSpeed={120}
                    />
                </div>
            </div>
       </div>
    );
}

export default FirstIm