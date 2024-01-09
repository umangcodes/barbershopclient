const Footer = () => {
  return (
    <div className="flex md:justify-around w-[80vw] md:px-24 pt-24 pb-48 flex-col md:flex-row">
        <div className="flex flex-col gap-2 pb-10 sm:pb-0">
          <h1 className="text-accent1 text-2xl font-semibold">Contact Us</h1>
          <p className="text-secondary/90 md:px-0 px-2">Address</p>
          <p className="text-secondary/90 md:px-0 px-2">Contact number</p>
          <p className="text-secondary/90 md:px-0 px-2">Email</p>
        </div>
        <div className="flex flex-col pb-10 sm:pb-0">
          <h1 className="text-accent1 text-2xl font-semibold pb-2">Schedule</h1>
          <ul className="text-secondary/90 flex flex-col gap-2 md:px-0 px-2">
            <li>Monday		10:00 - 20:00</li>
            <li>Tuesday		10:00 - 20:00</li>
            <li>Wednesday		10:00 - 20:00</li>
            <li>Thursday		10:00 - 20:00</li>
            <li>Friday		10:00 - 20:00</li>
            <li>Saturday		10:00 - 20:00</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-accent1 text-2xl font-semibold">Subscribe</h1>
          <h2 className="text-accent1 text-lg pb-2 md:px-0 px-2">Subscribe to stay in touch</h2>
          <fieldset className="border border-secondary bg-opacity-0 w-48 md:w-full flex justify-between md:mx-0 mx-2 ">
            <input placeholder="Your Email" style={{ background: 'transparent' }} className="outline-none text-secondary md:px-5 py-2 px-4"/>
            <button className="px-3 py-3 mx-1 my-1 bg-secondary font-semibold md:text-lg sm:px-2">Subscribe</button>
          </fieldset>
        </div>
    </div>
  )
}

export default Footer