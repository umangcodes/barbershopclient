import { FACEBOOK, TIKTOK, INSTA} from "@/public/assets/icons"
import { LOGO } from "@/public/assets/images"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className="top-0 left-0 sticky w-full flex items-center justify-around py-5 text-xl bg-black/80 text-secondary  z-20" >
        <Image src={LOGO} alt="Kedar Hair Inc" className="h-12 w-48 object-cover aspect-auto"/>
        <nav className="flex gap-5">
            <Link href="/" className="hover:font-semibold transition-all ease-in-out duration-150 ">Home</Link>
            <Link href="/book" className="hover:font-semibold transition-all ease-in-out duration-150">Appointment</Link>
            <Link href="/" className="hover:font-semibold transition-all ease-in-out duration-150">Products</Link>
            <Link href="/" className="hover:font-semibold transition-all ease-in-out duration-150">Services</Link>
            <Link href="/" className="hover:font-semibold transition-all ease-in-out duration-150">About</Link>
        </nav>
        <div id="social-links" className="flex gap-4">
            <Link href="/"><Image src={FACEBOOK} alt="facebook" className="w-6 hover:scale-125 transition-all ease-in-out duration-150"/></Link>
            <Link href="/" className=""><Image src={TIKTOK} alt="tiktok" className="w-6 hover:scale-125 transition-all ease-in-out duration-150"/></Link>
            <Link href="/"><Image src={INSTA} alt="instagram" className="w-6 hover:scale-125 transition-all ease-in-out duration-150"/></Link>
        </div>
    </div>
  )
}

export default Header