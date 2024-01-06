const ServiceCards = () => {
  return (
    <div className="py-32 bg-accent2  items-center flex flex-col border-t-background border">
        <h1 className="capitalize text-2xl font-semibold pb-12">Our services</h1>
        <div className="flex flex-wrap  items-center justify-around ">
            <div id="service-1" className="flex gap-2">
                <p>image</p>
                <div className="flex flex-col items-start w-48">
                    <h1 className="text-xl font-semibold">Service title</h1>
                    <p className="py-2">Cuts ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                    <button>Book now</button>
                </div>
            </div>
            <div id="service-2" className="flex gap-2">
                <p>image</p>
                <div className="flex flex-col items-start w-48">
                    <h1 className="text-xl font-semibold">Service title</h1>
                    <p className="py-2">Cuts ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                    <button>Book now</button>
                </div>
            </div>
            <div id="service-3" className="flex gap-2">
                <p>image</p>
                <div className="flex flex-col items-start w-48">
                    <h1 className="text-xl font-semibold">Service title</h1>
                    <p className="py-2">Cuts ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                    <button>Book now</button>
                </div>
            </div>
            <div id="service-4" className="flex gap-2">
                <p>image</p>
                <div className="flex flex-col items-start w-48">
                    <h1 className="text-xl font-semibold">Service title</h1>
                    <p className="py-2">Cuts ut nisl quam nestibulum drana odio elementum sceisue the can golden varius the dis monte.</p>
                    <button>Book now</button>
                </div>
            </div>
        </div>

        
        

    </div>
  )
}

export default ServiceCards
