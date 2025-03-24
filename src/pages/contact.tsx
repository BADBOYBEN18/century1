/* eslint-disable @next/next/no-img-element */
import { Nav } from '@/components/Nav';
import Head from 'next/head';
import React from 'react';

const contact = () => {
  return (
    // <div className="font-main">
    //   <Head>
    //     <title>Contact</title>
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <meta
    //       name="description"
    //       content="contct us page for light olives child care website"
    //     />
    //   </Head>
    //   <Nav />

    //   <section className="pb-10">
    //     <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 py-6 lg:pt-[2rem] xl:pt-[4rem] md:items-start flex flex-col  md:flex-row md:gap-x-10 xl:gap-x-20 gap-y-4">
    //       <div className=" space-y-4 flex flex-col flex-1">
    //         <div className="md:pt-16 lg:pt-7 space-y-4">
    //           <h1 className="text-[20px]  md:text-[24px] lg:text-[40px] font-medium pb-2 md:pb-4">
    //             Send us a message
    //           </h1>
    //           <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
    //             Have a question? Want to say hello? Simply enter your{' '}
    //             <br className="hidden lg:block" />
    //             information below to register your interest with us and{' '}
    //             <br className="hidden lg:block" /> a member of our team will be
    //             in touch shortly!
    //           </p>
    //           <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
    //             With over 30 years of world class child care experience,{' '}
    //             <br className="hidden lg:block" /> vibrant centers, fully
    //             registered child care educators,{' '}
    //             <br className="hidden lg:block" /> CPR/first aid trained, and
    //             subsidize assistance, you’re in{' '}
    //             <br className="hidden lg:block" /> great hands! Contact us and
    //             grow with your child, through us.
    //           </p>
    //         </div>

    //         {/* mobile and desktop form */}
    //         <form
    //           method="get"
    //           encType="multipart/form-data"
    //           action="mailto:chuama2016@gmail.com"
    //         >
    //           <div className="md:max-lg:hidden lg:pt-5 xl:pt-11">
    //             <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 xl:gap-x-8">
    //               <div>
    //                 <label
    //                   className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //                   htmlFor="name"
    //                 >
    //                   Name
    //                 </label>
    //                 <input
    //                   className="bg-[#fefbfc]  border-[0.25px] py-2 lg:py-4 p-2 w-full rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //                   type="text"
    //                   placeholder="Enter your name"
    //                   name=""
    //                   id="name"
    //                 />
    //               </div>
    //               <div>
    //                 <label
    //                   className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //                   htmlFor="email"
    //                 >
    //                   Email
    //                 </label>
    //                 <input
    //                   className="bg-[#fefbfc]  border-[0.25px]  py-2 lg:py-4 w-full p-2 rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //                   type="email"
    //                   placeholder=" Enter your email"
    //                   name=""
    //                   id="email"
    //                 />
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <label
    //                 className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //                 htmlFor="message"
    //               >
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 placeholder="Write your message"
    //                 className="w-full lg:w-1/2 xl:w-[276px] flex-1 p-2 bg-[#fefbfc]  border-[0.25px] rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //                 rows={4}
    //               ></textarea>
    //             </div>
    //             <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] mt-4 rounded-lg ">
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>

    //       <div className="flex-1">
    //         <img
    //           src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%202333.png?updatedAt=1725775076649"
    //           className="object-cover object-center  lg:w-[654px] lg:h-[654px]"
    //           alt=""
    //         />
    //       </div>
    //     </div>

    //     {/* tablet form */}
    //     <form
    //       method="get"
    //       encType="multipart/form-data"
    //       action="mailto:chuama2016@gmail.com"
    //     >
    //       <div className="px-4 md:max-lg:block md:max-w-4xl m-auto hidden">
    //         <div className="grid grid-cols-2 gap-2 mt-10 mb-4">
    //           <div>
    //             <label
    //               className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //               htmlFor="name"
    //             >
    //               Name
    //             </label>
    //             <input
    //               className="bg-[#fefbfc]  border-[0.25px] flex-1 py-2 p-2 w-full rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //               type="text"
    //               placeholder="Enter your name"
    //               name=""
    //               id="name"
    //             />
    //           </div>
    //           <div>
    //             <label
    //               className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //               htmlFor="email"
    //             >
    //               Email
    //             </label>
    //             <input
    //               className="bg-[#fefbfc]  border-[0.25px] flex-1 py-2 p-2 w-full  rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //               type="email"
    //               placeholder=" Enter your email"
    //               name=""
    //               id="email"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label
    //             className="text-[12px] md:text-[14px] text-[#000000BF] mb-1 block"
    //             htmlFor="message"
    //           >
    //             Message
    //           </label>
    //           <textarea
    //             id="message"
    //             placeholder="Write your message"
    //             className="w-1/2 p-2 bg-[#fefbfc]  border-[0.25px] rounded-sm placeholder:text-[12px] placeholder:text-[#00000080] placeholder:font-light"
    //             rows={4}
    //           ></textarea>
    //         </div>
    //         <button className="bg-[#3B465C] text-white  text-[14px] py-[12px] px-[24px] mt-4 rounded-lg ">
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </section>
    // </div>
    <div className="h-screen flex items-center justify-center">
      nothing here for now
    </div>
  );
};

export default contact;
