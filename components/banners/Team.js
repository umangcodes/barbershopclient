import { INTRO1, INTRO2 } from "@/public/assets/images"
import Image from "next/image"

const Specials = () => {
  return (
    <div className="h-[40vh] flex items-center justify-between py-5 text-secondary text-2xl px-24">
        <div id="desc" className="w-[45%]">
            <h1 className="text-4xl py-2">Meet Our Team</h1>
            <p className="text-sm text-accent1">
            Come experience a unique and edgy barbershop for all your hair and beard needs. Vulputate ons amet ravida haretra nuam the drana miss uctus enec accumsan justo aliquam sit amet auctor orci done vitae risus duise nunc sapien.
            </p>
        </div>
        <div id="image" className="w-[45%] flex gap-5">    
            <div className="w-[30%]">
                <Image src={INTRO1} alt="" className="aspect-auto object-fit"/>
            </div>
            <div className="w-[30%]">
                <Image src={INTRO2} alt="" className="aspect-auto object-fit"/>
            </div>
            <div className="w-[30%]">
                <Image src={INTRO1} alt="" className="aspect-auto object-fit"/>
            </div>
        </div>
    </div>
  )
}

export default Specials