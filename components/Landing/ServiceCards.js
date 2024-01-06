import loadCustomRoutes from "next/dist/lib/load-custom-routes"

const ServiceCards = () => {
  return (
    <div className="h-[75vh] bg-accent2 flex items-center justify-around flex-wrap">
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
  )
}

export default ServiceCards
