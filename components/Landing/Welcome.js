import { LANDING } from "@/public/assets/images"
import Image from "next/image"

const Welcome = () => {
  return (
    <div className="w-full inline-block">
        <div className="flex flex-col items-start justify-end mx-5 relative h-[85vh]">
            <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black/80 rounded-3xl z-0" />
            <Image src={LANDING} placeholder="blur" alt="barber shop" fill className="w-full h-full object-center object-cover rounded-3xl -z-10" sizes="100vw" priority/>
            <div className="w-full p-6 flex flex-col items-center justify-center z-0 text-light h-full text-center">
              <h1 className='font-bold capitalize text-2xl sm:text-xl md:text-3xl lg:text-4xl text-secondary'>
                <span className='bg-gradient-to-r from-accent1 to-accent1 dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
                Her beauty
                <br/>
                His style
                </span>
              </h1>
              <p className='hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in text-accent1'>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Welcome