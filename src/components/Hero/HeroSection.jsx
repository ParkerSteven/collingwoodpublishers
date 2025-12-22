import Link from "next/link";
import CtaButton from "../ButtonCTA/CtaButton";
import DividerIcon from "../DividerIcon";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function HeroSection({ padding = "pt-80" }) {
    return (
        <section>
            <div className={` ${padding} -mt-60 pb-40 bg-gray-100`}>
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h2 className="sm:text-[55px] md:text-[45px] lg:text-[60px] xl:text-[76px] text-black font-bold sm:leading-12.75 md:leading-11.25 lg:leading-15 xl:leading-19">Get Published, <br /> Seen & Heard.</h2>
                            <DividerIcon className="w-full h-4 text-black mt-4" />
                            <div className="mt-4">
                                <p className="font-semibold sm:text-[18px] md:text-[14px] lg:text-[16px] xl:text-[19px]">Go beyond writing, become a published author with a global audience. Hassle-free publishing with a dedicated literary agent is now easier than ever!</p>
                            </div>
                            <div className="mt-5 flex flex-row gap-2">
                                <CtaButton />
                                <CtaButton content="Connect with  Agent" />
                            </div>
                        </div>
                        <div className="md:ml-14">
                            <div className="border-2 border-black p-3 rounded-sm  items-center ">
                                <h2 className="text-center font-semibold md:text-[12px] lg:text-[20px] xl:text-[25px] md:-mt-6 lg:-mt-8.5 mb-3 capitalize px-6 rounded-sm w-fit border-2 border-black bg-primary">Just a Chat Away from 30% OFF</h2>
                                <div>
                                    <form action="">
                                        <div className="flex flex-col gap-3">
                                            <div>
                                                <input type="text" className="bg-gray-200 w-full border-2 border-gray-200 px-3 lg:px-5 md:py-1 lg:py-2 rounded-sm md:text-[12px] lg:text-[14px] xl:text-[16px]" placeholder="Your Good Name" />
                                            </div>
                                            <div>
                                                <input type="email" className="bg-gray-200 w-full border-2 border-gray-200 px-3 lg:px-5 md:py-1 lg:py-2 rounded-sm md:text-[12px] lg:text-[14px] xl:text-[16px]" placeholder="Enter Email to Unlock Savings" />
                                            </div>
                                            <div>
                                                <input type="text" className="bg-gray-200 w-full border-2 border-gray-200 px-3 lg:px-5 md:py-1 lg:py-2 rounded-sm md:text-[12px] lg:text-[14px] xl:text-[16px]" placeholder="Drop Your Number" />
                                            </div>
                                            <div>
                                                <textarea type="text" cols="5" rows="5" className="bg-gray-200 w-full border-2 border-gray-200 px-3 lg:px-5 md:py-1 lg:py-2 rounded-sm md:text-[12px] lg:text-[14px] xl:text-[16px]" placeholder=" What Are You Looking For?"></textarea>
                                            </div>
                                        </div>
                                        <div className={`bg-primary px-4 w-fit py-2 rounded-sm border-2 border-black hover:bg-white hover:scale-95`}>
                                            <Link href="#" className='font-semibold md:text-[12px] lg:text-[16px]'>Unlock 30% Savings</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container -mt-24">
                 <LogoSliderBlock />
            </div>
        </section>
    )
}
