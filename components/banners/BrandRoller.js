import { BRAND1, BRAND2} from "@/public/assets/images"
import Image from "next/image"

const BrandRoller = () => {
  return (
    <div className="bg-secondary/75 h-24 flex items-center justify-center gap-10">
        <Image src={BRAND1} alt="brand1" className="h-20 w-20 object-cover" />
        <Image src={BRAND2} alt="brand1" className="h-20 w-20 object-cover" />
        <Image src={BRAND1} alt="brand1" className="h-20 w-20 object-cover" />
        <Image src={BRAND2} alt="brand1" className="h-20 w-20 object-cover" />
        <Image src={BRAND1} alt="brand1" className="h-20 w-20 object-cover" />
        <Image src={BRAND2} alt="brand1" className="h-20 w-20 object-cover" />
    </div>
  )
}

export default BrandRoller