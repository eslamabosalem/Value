import React, { useState, useEffect } from 'react';
import elodo from "../../assets/images/Picture1 (2).jpg";
import Group from "../../assets/images/Group.jpg";
import imgess2 from "../../assets/images/imgess2.jpg";

function TheValuefBullying() {
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
        <>
            <header className='TheValuefBullyingCover' >
            </header>
            {/* section1 */}
            <section className='mt-28 flex flex-col items-center'>
                <h1 className='text-4xl text-teal-600 mt-14 text-center'>القيمة الاولى</h1>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 mt-14 text-center'>“ قيمة الشكر لله مستنبطة من سورة النبأ “</h2>
                    <div className="row flex flex-col lg:flex-row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl text-right">
                            <h2>فى قوله تعالى : "أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ مِهَٰدٗا (6) وَٱلۡجِبَالَ أَوۡتَادٗا (7) وَخَلَقۡنَٰكُمۡ أَزۡوَٰجٗا (8) وَجَعَلۡنَا نَوۡمَكُمۡ سُبَاتٗا (9) وَجَعَلۡنَا ٱلَّيۡلَ لِبَاسٗا (10) وَجَعَلۡنَا ٱلنَّهَارَ مَعَاشٗا (11) وَبَنَيۡنَا فَوۡقَكُمۡ سَبۡعٗا شِدَادٗا (12) وَجَعَلۡنَا سِرَاجٗا وَهَّاجٗا (13) وَأَنزَلۡنَا مِنَ ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا (14) لِّنُخۡرِجَ بِهِۦ حَبّٗا وَنَبَاتٗا (15) وَجَنَّٰتٍ أَلۡفَافًا (16)"</h2>
                        </div>
                        <div className="relative lg:w-6/12 md:w-1/2 flex justify-center">
                            <img src={elodo} alt="elodo" className='w-2/3 lg:mx-36 ml-14 py-5 text-center rounded-2xl' />
                            <div className="absolute inset-0 ml-20 flex items-center justify-center text-3xl text-emerald-300">
                                قيمة الشكر
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className='md:m-auto lg:mt-96 md:mt-96'>
                <div className="container colorr relative mt-20 md:mt-6 rounded-3xl">
                    <div className="row">
                        <div className="flex justify-center items-center lg:w-6/12 md:w-1/2">
                            <h2 className='text-pretty text-green-600 ms-20 text-2xl z-20'>نستنبط من هذه الآيات ان نعم الله سبحانه و تعالى كثيرة ولابد ان نشكر الله على هذه النعم</h2>
                        </div>
                        <div className="lg:w-6/12 md:w-1/5 mt-5 m-auto">
                            <img src={Group} alt="Group" className='absolute bottom-8 right-36 rounded-3xl hidden md:block' />
                            <img src={Group} alt="Group" className='block m-auto rounded-3xl mb-4 md:hidden ' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>“ كيف نشكر الله على نعمه”</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-6">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl flex flex-col space-y-2 text-right">
                            <span className='text-pretty'>اولا: ان نحمد الله ونقول الحمد لله رب العالمين </span>
                            <span className='text-pretty'>ثانيا: الثناء على الله بأن نذكر نعمه </span>
                            <span className='text-pretty'>ثالثا: طاعه الله باتباع الأوامر واجتناب النواهى</span>
                        </div>
                        <div className="py-7 lg:w-6/12 md:w-1/2 flex justify-center">
                            <img src={imgess2} alt="imgess2" className='w-96 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className='bg-green-100'>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 py-6 text-center'>“ قصص عن قيمة الشكر “</h2>
                    <div className="row flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl text-center">
                            <span className='text-pretty text-right my-3'>الحمد لله، هو شكرنا لله على كل نعمة أعطانا إياها، مثل الصحة والأصدقاء. فلنفرح بقلوبنا ونقول دائمًا: الحمد لله، لأنه يحبنا ويرعانا!</span>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 flex justify-center">
                            <iframe className='rounded-2xl w-full max-w-lg'
                                src="https://www.youtube.com/embed/EaRxO1tC8e0"
                                title="قصة للاطفال عن الحمد والشكر"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TheValuefBullying;
