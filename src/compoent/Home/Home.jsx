import React, { useEffect, useState } from 'react';
import kyamm from "../../assets/images/kyamm.jpg";
import Hasanati from "../../assets/images/Hasanati.jpg";
import Group from "../../assets/images/Group.jpg";
import Group1 from "../../assets/images/Group-1.jpg";
import Group2 from "../../assets/images/Group-2.jpg";
import Group3 from "../../assets/images/Group-3.jpg";
import Wepp from "../../assets/images/Wepp.jpg";

function Home() {
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
<header/>
{/* section1 */}
<section>
    <div className="container mx-auto px-4">
        <div className="text-center py-5">
            <h2 className='text-3xl p-7 bg-green-400 inline-block rounded-full'>
                رؤيتنا
            </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-6/12 md:w-1/2 px-5 text-green-600 flex justify-center items-center">
                <span className='text-balance text-right leading-relaxed text-lg md:text-2xl'>
                    نشأة جيل لديه الوعي الكافي بتعاليم دينه من حيث الأخلاق والقيم الدينية. في أول سنة إن شاء الله سيتم طرح منهج تعليمي،
                  
                    وفي خلال المد من (سنتين ل 3 سنوات) سيتم طرح تطبيق متكامل للطفل يكون له خير معين؛ لأننا نرى أن المجتمع يحتاج إلى نشئ جديد وملم بتعاليم دينه بعيدًا عن الملهيات المنتشرة هذه الأيام.
                  
                    والألعاب التي ليس لها فائدة ولا تفيد الطفل، بل تؤثر عليه بالسلب وتوجهه للعنف والانطوائية والتوحد.
                </span>
            </div>
            <div className="lg:w-6/12 md:w-1/2 flex justify-center my-3">
                <img src={kyamm} alt="kyamm" className='w-full max-w-lg rounded-2xl' />
            </div>
        </div>
    </div>
</section>



{/* section2 */}
<div className="container py-11 colorr rounded-3xl m-auto">
    <div className="text-center py-5">
        <h2 className='text-3xl p-7 bg-green-400 inline-block rounded-full'>
            مهمة الشركة
        </h2>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-6/12 md:w-1/2 px-5 text-3xl text-teal-600 flex justify-center">
            <div className="text-pretty text-green-600 m-5 text-2xl flex-col text-right">
                <h2 className='text-center text-teal-700 my-5 text-3xl'> لتحقيق رؤية الشركة سنقوم بعمل الآتي</h2>
                <span className='text-justify'>اولا: عمل منهج تعليمي متميز للمعلم وللطفل بمساعدة ولي الأمر</span>
                <br />
                <span className='text-justify'>ثانيا: عمل تطبيق على الموبايل يسهل استخدامه وبه قصص تعليمية - منهج مشوق للطفل وبه قيم مستنبطة من القرآن ألعاب تعليمية هادفة</span>
                <br />
                <span className='text-justify'>ثالثا: ويحتوي التطبيق أيضاً ما يحتاجه الطفل من تطبيقات آخرى سيتم تجميعها في مكان واحد لعدم تشتيته وتقديم له كل ما يفيده</span>
            </div>
        </div>
        <div className="lg:w-5/12 px-5 md:w-1/2 flex justify-center mt-5 lg:mt-0">
            <img src={Wepp} alt="Wepp" className='w-full rounded-2xl' />
        </div>
    </div>
</div>

{/* section 3 */}




<section className='lg:my-24 md:my-12 p-10 m-auto rounded-3xl'>
    <div className="container colorr relative rounded-3xl">
        <div className="row flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/12 lg:absolute lg:bottom-32 md:bottom-48 md:w-1/4 mt-9 flex justify-center order-1 lg:order-1">
                <img src={Hasanati} alt="Hasanati" className='w-full rounded-3xl' />
            </div>
            <div className="lg:w-6/12 md:w-1/2 flex justify-center order-2 lg:order-2 lg:m-auto mt-5">
                <div className="px-5 text-center">
                    <h2 className='text-teal-700 text-3xl'>بيئة إسلامية آمنة من الإعلانات، وخالية من الموسيقى</h2>
                    <h3 className='text-pretty text-green-600 m-5 text-2xl'>نراعي الثوابت الإسلامية ونحرص على إيجاد بيئة تربوية آمنة لأطفال المسلمين ومطمئنة للأهالي، عبر منع النغمات الموسيقية والإعلانات من خارج التطبيق.</h3>
                </div>
            </div>
        </div>
    </div>
</section>



{/*  section4 */}



<section className='  sm:mt-96  md:mt-96 md:m-auto '>
                <div className="container colorr relative mt-20 md:mt-6  rounded-3xl">
                    <div className="row">
                    <div className="flex justify-center  items-center lg:w-6/12 md:w-1/2"> 
                        <h2 className='text-pretty text-green-600 ms-20 text-2xl   text-center  z-20'>اعتمد القيم الاسلامية في منظومتك التعليميةوأدخل الإبداع إلى حصة التربية الإسلامية</h2>
                        </div>
                    <div className="lg:w-6/12 md:w-1/5 mt-5 m-auto  ">
                        <img src={Group} alt="Group" className= ' absolute bottom-8 right-36 rounded-3xl hidden md:block' /><img src={Group} alt="Group" className='block m-auto  rounded-3xl mb-4 md:hidden ' />
                        </div>
                    </div>
                </div>
            </section>

{/* section 5 */}


<section className='mt-72 xl:mt-96 m-auto'>
    <div className="container colorr py-20 relative rounded-3xl">
        <div className="row">
            <div className="lg:w-6/12 md:w-1/2">
                <img src={Group1} alt="Group" className='absolute bottom-8 left-36 rounded-3xl hidden xl:block ' />
            </div>
            <div className="lg:lg:w-6/12 md:w-1/2 flex justify-between  ">
                <img src={Group2} alt="Group" className='absolute bottom-8 right-auto rounded-3xl hidden xl:block ' />
                <img  src={Group3}  alt="Group" className="absolute bottom-8  left-1/2   transform -translate-x-1/2 rounded-3xl sm:left-auto sm:m-auto sm:right-20 sm:transform-none" />
            </div>
        </div>
    </div>
</section>
        </>
        
    )
}

export default Home
