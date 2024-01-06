import { INTRO1, LANDING } from "@/public/assets/images"
import Image from "next/image"

const ProductCards = () => {
  return (
    <div className=" bg-accent2 w-full justify-around flex flex-col px-5 pb-10 pt-10">
        <div className="text-center">
            <h1 className="text-4xl font-semibold pb-2">Our Products</h1>
            <h2 className="pb-10">Checkout our collection of products that we use</h2>
        </div>
        <div className="flex gap-5 items-center justify-center pb-10">
            <div className="flex flex-col relative items-center h-full w-[25%] overflow-hidden hover:bg-background/20">
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-transparent from-0% to-black/80 z-10" />
                <Image src={INTRO1} alt="product1" className="h-full w-full object-cover hover:scale-125 overflow-hidden transition-all ease-in-out duration-150 z-0"/>
                <p className="z-10">Product 1</p> 
            </div>
            <div className="h-full w-[25%] overflow-hidden hover:bg-background/20">
                <Image src={INTRO1} alt="product1" className="object-cover hover:scale-125 overflow-hidden transition-all ease-in-out duration-150 -z-10"/>
            </div>
            <div className="h-full w-[25%] overflow-hidden hover:bg-background/20">
                <Image src={INTRO1} alt="product1" className="object-cover hover:scale-125 overflow-hidden transition-all ease-in-out duration-150 -z-10"/>
            </div>
        </div>
    </div>
  )
}

export default ProductCards