const Footer = () => {
  return (
    <div className="flex md:justify-between w-[80vw] md:px-24 pt-24 pb-48 flex-col md:flex-row">
        <div className="flex flex-col gap-2 pb-10 sm:pb-0">
          <h1 className="text-accent1 text-2xl font-semibold">Contact Us</h1>
          <p className="text-secondary/90 md:px-0 px-2">Address</p>
          <p className="text-secondary/90 md:px-0 px-2">Contact number</p>
          <p className="text-secondary/90 md:px-0 px-2">Email</p>
        </div>
        <div className="flex flex-col pb-10 sm:pb-0">
          <h1 className="text-accent1 text-2xl font-semibold pb-2">Schedule</h1>
          <ul className="text-secondary/90 flex flex-col gap-2 md:px-0 px-2">
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Monday</h2>10:00 - 20:00</li>
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Tuesday</h2>10:00 - 20:00</li>
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Wednesday</h2>10:00 - 20:00</li>
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Thrusday</h2>10:00 - 20:00</li>
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Friday</h2>10:00 - 20:00</li>
            <li className="flex justify-between"><h2 className="md:w-48 w-32">Saturday</h2>10:00 - 20:00</li>
            
          </ul>
        </div>
        <div className="flex flex-col lg:w-[25vw]">
          <h1 className="text-accent1 text-2xl font-semibold">Subscribe</h1>
          <h2 className="text-accent1 text-lg pb-2 md:px-0 px-2">Subscribe to stay in touch</h2>
          <div className="border border-secondary bg-opacity-0 flex w-full justify-between md:mx-0 mx-2 ">
            <input placeholder="Your Email" style={{ background: 'transparent' }} className="outline-none text-secondary md:px-5 py-2 px-2 w-[58%]"/>
            <button className="px-3 py-3 bg-secondary font-semibold sm:px-2 w-32 m-1">Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default Footer