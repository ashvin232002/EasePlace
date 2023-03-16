import React from 'react'
import safety from '../../images/safety.jpeg';
import safety2 from '../../images/safety2.jpeg';
function Info() {
    return(
        <>
            <h1 className="text-2xl font-bold justify-center  py-[30px] text-center">FOCUSED ON SAFETY, WHEREVER YOU GO..</h1>
            <div className='bg-gray-100 w-full py-[30px] container flex mx-auto items-center justify-center mt-auto'>
                <div className="left w-1/3 mx-14">
                    <img className=" w-60 md:w-full" src={safety} alt=""/>
                    <p className=" sm:text-[0.5px] md:text-[12px]">Safety is Our First Priority in During this Pandamic.With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                </div>
                <div className="right w-1/3 mx-14">
                    <img className=" w-60 md:w-full" src={safety2} alt=""/>
                    <p className=" sm:text-[0.5px] md:text-[12px] ">The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.We are Always Happy for Our Customers to help them.Our Main Purpose is to help Needy.</p>
                </div>
                <div>
                </div>
            </div>
        </>
     );
 }
export default Info;

