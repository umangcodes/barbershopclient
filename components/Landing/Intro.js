import { INTRO1,  INTRO2 } from "@/public/assets/images"
import Image from "next/image"

const Intro = () => {
  return (
    <div className="w-full h-[75vh] flex justify-between items-center bg-accent2 px-24">
        <div className="w-[45%] ">
            <h1 className={`text-4xl transition-all ease-in duration-150 font-semibold`}>Business Name</h1>
            <div className="py-5 text-justify w-[75%] flex flex-col gap-5">
            <p>Come experience a unique and edgy barbershop for all your hair and beard needs. ravida haretra nuam enim mi obortis eset uctus enec accumsan eu justo alisuame amet auctor orci donec vitae vehicula risus.
            </p>
            <p>
            Barber utate ons amet ravida haretra nuam the duru miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitae risus duise nisan sapien silver on the accumsan id mauris apien.
            </p>
            <ul className="list-disc px-10">
                <li>We&apos;re professional and certified barbers</li>
                <li>We&apos;re professional and certified barbers</li>
                <li>We&apos;re professional and certified barbers</li>
            </ul>
            </div>
        </div>
        <div className="w-[45%]">
            <div id="image1" className="flex gap-5">
                <div className="w-[30%]">
                    <Image src={INTRO1} alt="" className="aspect-auto object-fit pt-24"/>
                </div>
                <div className="w-[30%]">
                    <Image src={INTRO2} alt="" className="aspect-auto object-fit pb-24"/>
                </div>
            </div>
            <div id="image2">

            </div>
        </div>
    </div>
  )
}

export default Intro