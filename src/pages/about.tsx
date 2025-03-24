/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Head from 'next/head';

const about = () => {
  return (
    // <Layout>
    //   <Head>
    //     <title>About us</title>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <meta
    //       name="description"
    //       content="About page for light olives child care website"
    //     />
    //   </Head>
    //   <div className="font-main overflow-clip">
    //     <section className="py-10 px-4 lg:px-6 lg:py-20">
    //       <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col-reverse md:flex-row md:gap-x-9 xl:items-center m-auto ">
    //         <div className="md:flex-1">
    //           <img
    //             src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child.png?updatedAt=1725674902380"
    //             alt=""
    //           />
    //         </div>
    //         <div className="md:flex-1 space-y-3 mb-8 ">
    //           <h1 className="text-[#35A76C] text-[20px] md:text-[30px] lg:text-[40px] font-medium">
    //             Why Light Olives
    //           </h1>
    //           <p className="text-[12px] lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
    //             With over 21 EduKids locations across the Greater Toronto Area
    //             and over 30 years of providing outstanding childcare, we’re
    //             proud to provide full and part-time care for enhanced and
    //             enriched learning for children ages newborn to 12 years old.
    //           </p>
    //           <button className="bg-[#E62074] text-white text-[12px] sm:text-[16px] py-[8px] px-[20px] lg:py-4 lg:px-6 rounded-lg ">
    //             Stay in Touch
    //           </button>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="pb-10">
    //       <div className="lg:max-w-7xl m-auto">
    //         <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto text-center space-y-4">
    //           <p className="pb-2 text-[12.5px] md:text-[15px]  lg:text-[20px]">
    //             <span className="inline-flex mr-1  text-[#EC6B00]">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Services%20Tag.svg?updatedAt=1725676799286"
    //                 alt=""
    //               />
    //             </span>
    //             Services
    //           </p>
    //           <h2 className="text-[#35A76C] text-[15px] md:text-[20px] lg:text-[32px] font-medium">
    //             What do we provide
    //           </h2>
    //           <p className="text-[12px] sm:text-[13.5px] md:text-[16px]">
    //             We provide the best in class and nurturing services with all our
    //             centres
    //           </p>
    //         </div>

    //         <div className="flex flex-col md:flex-row flex-wrap gap-4 xl:gap-5 justify-center items-center mt-6 md:mt-8  lg:mt-10">
    //           {/* card 1 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#FDE81226] rounded-lg">
    //             <div className="rounded-full bg-[#37A7DF80] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] p-2 mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Bus--Icon@2x.png?updatedAt=1725677600168"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">Transport</h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 Safe and clean transportation with{' '}
    //                 <br className="hidden lg:block" /> a chaperon to local
    //                 schools
    //               </p>
    //             </div>
    //           </div>

    //           {/* card 2 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#37A7DF80] rounded-lg">
    //             <div className="rounded-full bg-white w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] inline-flex items-center justify-center p-2 mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Apple.png?updatedAt=1725677600154"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">
    //                 Healthy Meals
    //               </h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 Provided and prepared on site to{' '}
    //                 <br className="hidden lg:block" /> promote and nurture your
    //                 child’s learning <br className="hidden lg:block" />{' '}
    //                 according to Canada’s Food Guide
    //               </p>
    //             </div>
    //           </div>

    //           {/* card 3 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#EC6B0080] rounded-lg">
    //             <div className="rounded-full bg-[#526180] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] inline-flex items-center justify-center p-4  mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Vector.png?updatedAt=1725677600146"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">
    //                 Quality Staff
    //               </h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 Leading and registered early{' '}
    //                 <br className="hidden lg:block" /> Childhood Educators for
    //                 the best <br className="hidden lg:block" /> educational
    //                 experience
    //               </p>
    //             </div>
    //           </div>

    //           {/* card 4 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#37A7DF80] rounded-lg">
    //             <div className=" rounded-full bg-white w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] inline-flex items-center justify-center p-2 mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/First-Aid-Kit-Fill--Streamline-Mingcute-Fill.png?updatedAt=1725677600162"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">
    //                 Safety Trained
    //               </h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 CPR/First Aid trained staff to keep your{' '}
    //                 <br className="hidden lg:block" /> children safe and sound
    //                 and in good <br className="hidden lg:block" /> hands
    //               </p>
    //             </div>
    //           </div>

    //           {/* card 5 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#EC6B0080] rounded-lg">
    //             <div className=" rounded-full bg-[#526180] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] inline-flex items-center justify-center p-2 mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Award--Streamline-Tabler-Filled.png?updatedAt=1725677600160"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">
    //                 Licensed & Certified
    //               </h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 Proud to be fully licensed by the Ministry{' '}
    //                 <br className="hidden lg:block" /> of Children, Community,
    //                 and Social <br className="hidden lg:block" /> Services to
    //                 offer best in class child care.
    //               </p>
    //             </div>
    //           </div>

    //           {/* card 6 */}
    //           <div className="w-[350px] h-[200px] sm:h-[230px] lg:h-[280px] lg:w-[380px] xl:w-[400px] px-4 py-5 flex flex-col justify-center items-center text-center bg-[#FDE81226] rounded-lg">
    //             <div className="rounded-full bg-[#37A7DF80] w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] inline-flex items-center justify-center p-2 mb-6">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Money--Icon.png?updatedAt=1725677600231"
    //                 alt=""
    //               />
    //             </div>
    //             <div>
    //               <h1 className="text-[20px] md:text-[24px] pb-3">
    //                 Financial Assistance
    //               </h1>
    //               <p className="text-[12px]  sm:text-[16px]">
    //                 We make it easy for you to have{' '}
    //                 <br className="hidden lg:block" /> access to our child care,
    //                 financial <br className="hidden lg:block" /> subsidy is
    //                 available for your family
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-10 md:py-24 lg:py-32">
    //       <div className=" bg-[#10131A]">
    //         <div className="max-w-[30rem]  md:max-w-4xl  mx-auto lg:max-w-7xl px-4 py-12 md:py-2 lg:py-12 text-white flex flex-col  md:flex-row gap-[7rem] md:gap-2 xl:gap-x-[9rem] lg:justify-between">
    //           <div className="space-y-4 text-center flex flex-col items-center md:items-start md:flex-1 md:mt-[-3rem] lg:mt-[-9rem]">
    //             <img
    //               src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%202331.png?updatedAt=1725717152933"
    //               className="md:max-xl:w-[350px] lg:w-[450px] xl:w-[500px] block"
    //               alt=""
    //             />
    //             <h1 className="font-medium text-[18px] md:text-[23px] lg:text-[32px]">
    //               Our welcoming centres
    //             </h1>
    //             <p className="hidden lg:block text-left text-[13px]">
    //               We offer a welcoming environment with bright playrooms and
    //               spacious playgrounds for optimal learning and play. Our unique
    //               programs, designed by registered educators, provide fun and
    //               safe learning experiences. Your child&apos;s safety and
    //               well-being are our top priority.
    //             </p>

    //             <p className="text-[12px] md:text-[10px] md:text-left lg:hidden">
    //               We offer a welcoming environment with bright playrooms and
    //               spacious playgrounds for optimal learning and play. Your
    //               child&apos;s safety and well-being are our top priority.
    //             </p>
    //           </div>

    //           <div className="flex flex-col items-center md:items-start justify-center md:flex-1 md:mb-[-8rem] lg:mb-[-15rem]">
    //             <h1 className="text-[#E62074] text-[20px] md:text-[23px] lg:text-[35px]  font-medium pb-3">
    //               A Home Away from Home
    //             </h1>
    //             <div className="relative">
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Pattern.svg?updatedAt=1725717028712"
    //                 className="absolute md:-top-6 md:left-[85%] lg:-top-6 lg:left-[90%] xl:-top-9 "
    //                 alt=""
    //               />
    //               <img
    //                 src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%202332.png?updatedAt=1725717153317"
    //                 className="md:max-xl:w-[350px] lg:w-[450px] xl:w-[590px] relative"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-10 px-4 lg:px-6 lg:py-20">
    //       <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 xl:items-center m-auto ">
    //         <div className="md:flex-1 space-y-3 mb-8 ">
    //           <h1 className="text-[#37A7DF] text-[20px] md:text-[30px] lg:text-[40px] font-medium">
    //             Extended Times
    //           </h1>
    //           <p className="text-[12px] lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
    //             We do everything we can to make your busy schedule easier. To
    //             allow for extra travel time when you need it most, we offer
    //             extended hours at most of our centres of{' '}
    //             <span className="font-bold to-txtcolor">6:45am</span> to{' '}
    //             <span className="font-bold to-txtcolor">6:15pm</span>.
    //           </p>
    //           <button className="bg-[#E62074] text-white text-[12px] sm:text-[16px] py-[8px] px-[20px] lg:py-4 lg:px-6 rounded-lg ">
    //             Stay in Touch
    //           </button>
    //         </div>
    //         <div className="md:flex-1">
    //           <img
    //             src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child2?updatedAt=1725723648933"
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //     </section>

    //     <section className="pb-14  lg:py-[160px]">
    //       <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
    //         <h1 className="text-[#EC6B00] text-[20px] md:text-[25px] lg:text-[40px]">
    //           Close to Home,{' '}
    //           <span className="text-[#35A76C]">Close to Heart</span>
    //         </h1>
    //         <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] pb-5">
    //           To learn more about one of our world class centres serving you in
    //           your area, <br className="hidden md:block" /> please see our{' '}
    //           <Link href="/location">
    //             <span className="text-[#37A7DF]">locations page</span>
    //           </Link>{' '}
    //           or contact us about how we can <br className="hidden md:block" />{' '}
    //           best care for your child.
    //         </p>
    //         <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] lg:text-[20px] py-[9px] md:py-[12px] px-[24px]  lg:px-[32px] rounded-lg ">
    //           Enquire Now
    //         </button>
    //       </div>
    //     </section>
    //   </div>
    // </Layout>
    <div className="h-screen flex items-center justify-center">
      nothing here for now
    </div>
  );
};

export default about;
