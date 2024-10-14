import React, { useState, useEffect } from 'react';
import ghpo from "../../assets/images/ghpo.jpg";
import Group from "../../assets/images/Group.jpg";
import toold from "../../assets/images/toold.jpg";

function SpiritualReflections() {
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
            <header className='SpiritualReflectionsCover' >
            </header>
            {/* section 1 */}
            <section>
                <h1 className='text-4xl text-teal-600 flex justify-center items-center mt-14 text-center'>القيمةالثانية</h1>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>” قيمة التأمل في خلق هللا مستنبطة من سورة النازعات ”</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 sm:m-auto text-pretty text-green-600 text-2xl text-center">
                            <h2 className='text-pretty mb-4 text-right'>إِنَّ فِي ذَٰلِكَ لَعِبۡرَةٗ لِّمَن يَخۡشَىٰٓ (26) ءَأَنتُمۡ أَشَدُّ خَلۡقًا أَمِ ٱلسَّمَآءُۚ بَنَىٰهَا (27) رَفَعَ سَمۡكَهَا فَسَوَّىٰهَا (28) وَأَغۡطَشَ لَيۡلَهَا وَأَخۡرَجَ ضُحَىٰهَا (29) وَٱلۡأَرۡضَ بَعۡدَ ذَٰلِكَ دَحَىٰهَآ (30) أَخۡرَجَ مِنۡهَا مَآءَهَا وَمَرۡعَىٰهَا (31) وَٱلۡجِبَالَ أَرۡسَىٰهَا (32) مَتَٰعٗا لَّكُمۡ وَلِأَنۡعَٰمِكُمۡ (33) فَإِذَا جَآءَتِ ٱلطَّآمَّةُ ٱلۡكُبۡرَىٰ</h2>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 sm:m-auto flex justify-center">
                            <img src={ghpo} alt="ghpo" className='w-96 lg:mx-36 ml-14 py-5 text-center rounded-3xl' />
                        </div>
                    </div>
                </div>

                {/* section 2 */}
            </section>
            <section className='md:m-auto lg:mt-96 md:mt-96 '>
                <div className="container colorr relative mt-20 md:mt-6 rounded-3xl">
                    <div className="row">
                        <div className="flex justify-center items-center lg:w-6/12 md:w-1/2">
                            <h2 className='text-pretty text-green-600 ms-20 text-2xl text-center z-20'>نستنبط من الآيات أن نعم الله كثيرة، وعلينا التأمل فيها. التأمل يعزز الشكر والامتنان، فلنتذكر كم نحن محظوظون!</h2>
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
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 my-3 text-center'>“ كيف نتأمل في نعم الله”</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="py-2 lg:w-6/12 md:w-1/2 flex justify-center">
                            <img src={toold} alt="toold" className='w-full max-w-sm lg:max-w-sm rounded-2xl' />
                        </div>
                        <div className="lg:w-6/12 md:w-1/2 flex flex-col items-center text-pretty text-green-600 my-3 text-2xl space-y-2">
                            <span className='text-pretty text-center'>اولا: التأمل في جمال الخلق وإبداع الله</span>
                            <span className='text-pretty text-center'>ثانيا: التفكير في النعم التي نعيشها يوميًا</span>
                            <span className='text-pretty text-center'>ثالثا: التركيز على اللحظات الصامتة لتجديد الروح</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className='bg-green-100'>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 py-6 text-center'>“ قصص عن قيمة التأمل “</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl text-center">
                            <span className='text-pretty text-right my-3'>التأمل هو وسيلة للهدوء الداخلي والتواصل مع النفس. يساعدنا على فهم مشاعرنا وأفكارنا، ويمنحنا فرصة للتفكر في نعمة الحياة. فلنخصص لحظات للتأمل ونسعى للسلام الداخلي!</span>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 mt-7 flex justify-center m-auto">
                            <iframe width="480" height="300" src="https://www.youtube.com/embed/NuSr07k7Q5k" title="قصص أطفال | الله خالق كل شئ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SpiritualReflections;
