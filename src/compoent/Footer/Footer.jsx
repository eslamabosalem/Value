import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import facebook from "../../assets/images/facebook.jpg"
import instagram from "../../assets/images/instagram.jpg"
import youtube from "../../assets/images/youtube.jpg"

function Footer() {
    return (
        <>
<section>
    <div className="container">
        <h2 className='text-green-400 font-bold text-2xl text-center mb-6 p-7'>
            تابعنا على منصات التواصل الاجتماعي
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center p-9">
            <a href="">
                <img src={youtube} alt="youtube" className='w-4/6 mb-4 md:mb-0' />
            </a>
            <a href="https://www.facebook.com/inomtechs2022?mibextid=ZbWKwL">
                <img src={facebook} alt="facebook" className='w-4/6 mb-4 md:mb-0' />
            </a>
            <a href="https://www.instagram.com/inomtechs98?igsh=MTltbmhmd3Y1M2kwZw==">
                <img src={instagram} alt="instagram" className='w-4/6 mb-4 md:mb-0' />
            </a>
        </div>
    </div>
</section>



        {/* footer  */}
            <div className="colorr mt-20 py-2">
                <div className=" container">
                    <div className="row ">
                        <h2 className='text-pretty text-green-600  text-xl text-center m-auto rounded-full' >جميع الحقوق محفوظة لصالح شركة إنوم تك © 2024</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
