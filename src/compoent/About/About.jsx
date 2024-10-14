import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import elodo from "../../assets/images/Picture1 (2).jpg";

function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); 
            setLoading(false);
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <header>
            <div className="coverImages overflow-hidden">
                <div className="container">
                    <div className="relative flex flex-col items-center">
                        <div className="flex justify-center items-center mt-10 text-2xl gap-4 top-10 mx-auto">
                            <Link to="/theValuefBullying">
                                <button className='btn p-5 rounded-full Aboutbtn'>قيمة الشكر</button>
                            </Link>
                            <Link to="/spiritualReflections">
                                <button className='btn p-5 rounded-full Aboutbtn'>قيمة التأمل</button>
                            </Link>
                            <Link to="/guidingValues">
                                <button className='btn p-5 rounded-full Aboutbtn'>قيمة الأمانة</button>
                            </Link>
                        </div>

                        <div className="relative">
                            <img src={elodo} alt="elodo" className='max-w-lg md:max-w-xl lg:max-w-2xl h-auto mb-5 py-5 mx-auto mt-20' />
                            <h2 className='absolute inset-0 flex items-center justify-center text-4xl text-emerald-300 z-20 mt-20'>
                                القيم الاسلامية
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default About;
