import React, { useState, useEffect } from 'react';
import logor from "../../assets/images/logor.jpg";
import Groupt from "../../assets/images/Groupt.jpg";

function ContactUs() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // محاكاة تحميل البيانات
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
            <div className="container colorr mt-5 rounded-3xl">
                <div className="row">
                    <div className="flex justify-center items-center lg:w-6/12 md:w-1/2">
                        <img src={logor} alt="logor" className='w-2/3 lg:mx-36 ml-14 py-5 text-center rounded-full' />
                    </div>
                    <div className="flex justify-center items-center lg:w-6/12 md:w-1/2">
                        <p className='text-pretty text-green-600 ms-20 text-2xl'>
                            إنوم تك: هي شركة تهدف إلى تعزيز القيم الإسلامية من خلال تقديم محتوى تعليمي ومبتكر.
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <h2 className='text-3xl font-bold text-center text-green-600 colorr m-auto rounded-full p-4'>قيمنا</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-xl">
                            <div className="flex flex-col items-end space-y-4">
                            <div className="text-right">
                                    <h2 className='text-2xl text-teal-600 font-bold'>التربية</h2>
                                    <h3>نسعى إلى حسن احتضان الأولاد ومراعاة خصائصهم النفسية والعقلية والوجدانية والاجتماعية، ونطمح لنيل احترامهم ومحبتهم ومشاركتهم في جو من التفاعل الإيجابي والانضباط الذاتي.</h3>
                                </div>

                                <div className="text-right">
                                    <h2 className='text-2xl text-teal-600 font-bold'>نحافظ على الثوابت</h2>
                                    <h3>نؤمن بأن الإسلام هو النور الذي من شأنه أن يرسم مستقبلاً مشرقاً لأبنائنا. لذلك فإننا نفتخر بديننا ونستمسك بالرؤية الإنسانية والحضارية التي جاء بها والتي لا يمكن لأي محدثة أن تغير مسارها.</h3>
                                </div>

                                <div className="text-right">
                                    <h2 className='text-2xl text-teal-600 font-bold'>نتحدث بلغة العصر</h2>
                                    <h3>نواكب عن كثب التطورات المتسارعة على الحياة، ونسعى لأن نخاطب أبناءنا بلغة العصر التي تعبر عنهم وعن تطلعاتهم والتي تواكب نموهم.</h3>
                                </div>

                                <div className="text-right">
                                    <h2 className='text-2xl text-teal-600 font-bold'>الإبداع والابتكار</h2>
                                    <h3>نسعى باستمرار لعرض التربية الإسلامية بأساليب إبداعية ومواكبة للتطور الإلكتروني تليق بأشرف العلوم، تجذب اهتمام الأطفال وتساعد على تحسين سبل التعلم لديهم.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-6/12 md:w-1/2 flex justify-center mt-5"> 
                            <img src={Groupt} alt="Groupt" className='w-3/6 lg:max-w-md rounded-2xl' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
