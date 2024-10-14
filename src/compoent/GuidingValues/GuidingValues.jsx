import React, { useState, useEffect } from 'react';
import Group from "../../assets/images/Group.jpg";
import epop from "../../assets/images/epop.jpg";
import images3 from "../../assets/images/images3.jpg";

function GuidingValues() {
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
            <header className='GuidingValuesCover'>
            </header>
            {/* section 1 */}
            <section>
                <h1 className='text-4xl text-teal-600 flex justify-center items-center mt-14 text-center'>القيمةالثالثة</h1>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>” قيمة الأمانة مستنبطة من سورة المطففين”</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 sm:m-auto text-pretty text-green-600 text-2xl text-center">
                            <h2 className='text-pretty mb-4 text-right'> وَيْلٌ لِّلْمُطَفِّفِينَ ﴿١﴾ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ﴿٢﴾ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ ﴿٣﴾ أَلَا يَظُنُّ أُولَـئِكَ أَنَّهُم مَّبْعُوثُونَ ﴿٤﴾ لِيَوْمٍ عَظِيمٍ ﴿٥﴾ يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ</h2>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 sm:m-auto flex justify-center">
                            <img src={epop} alt="epop" className='w-96 lg:mx-36 ml-14 py-5 text-center rounded-3xl' />
                        </div>
                    </div>
                </div>
                {/* section 2 */}
            </section>
            <section className='md:m-auto lg:mt-96 md:mt-96'>
                <div className="container colorr relative mt-20 md:mt-6 rounded-3xl">
                    <div className="row">
                        <div className="flex justify-center items-center lg:w-6/12 md:w-1/2">
                            <h2 className='text-pretty text-green-600 ms-20 text-2xl text-center z-20'> الأمانة قيمة عظيمة، تدعونا للحفاظ على حقوق الآخرين والصدق في تعاملاتنا. لنُظهر ذلك في كل جوانب حياتنا!
                            </h2>
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
                <div className="container py-7">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>“ كيف نتأمل في قيمة الأمانة”</h2>
                    <div className="flex flex-col lg:flex-row items-center justify-between mt-6">
                        <div className="py-2 lg:w-6/12 md:w-1/2 flex justify-center">
                            <img src={images3} alt="images3" className='w-96 lg:mx-36 rounded-2xl' />
                        </div>
                        <div className="lg:w-6/12 md:w-1/2 sm:m-auto text-pretty text-green-600 text-2xl flex flex-col items-center space-y-2 text-right">
                            <span className='text-pretty'>اولا: الأمانة في التعامل مع الآخرين</span>
                            <span className='text-center'>ثانيا: حفظ الحقوق وعدم الإخلال بالواجبات</span>
                            <span className='text-pretty'>ثالثا: الالتزام بالصدق في كل الأفعال</span>
                        </div>
                    </div>
                </div>
            </section>

            {/*  section 4 */}
            <section className='bg-green-100'>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 py-6 text-center'>“ قصص عن قيمة الامانة “</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl text-center">
                            <span className='text-pretty text-right my-3'> الأمانة تعكس صدق النوايا وتعزز الثقة بين الناس. هي قيمة نحتاجها في تعاملاتنا اليومية، فهي تمنحنا السلام الداخلي وتساعدنا على بناء علاقات متينة. لنحرص على الالتزام بالأمانة في كل جوانب حياتنا!</span>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 mt-7 flex justify-center m-auto">
                            <iframe width="480" height="300" src="https://www.youtube.com/embed/wn7SuXDUC5E" title="الامانة - فيديو رائع عن الامانة" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GuidingValues;
