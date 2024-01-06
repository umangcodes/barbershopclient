const BookToday = () => {
  return (
    <div className="h-[25vh] flex items-center justify-center py-5 text-secondary text-2xl px-24">
      <div id="desc" className="">
        <h1 className="text-4xl py-2 transition-all ease-in-out duration-150 ">
            <span className='bg-gradient-to-r from-accent1 to-accent1 dark:from-accent1/50 
                dark:to-accent1/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
            <button>Book Appointment</button>
            </span>
        </h1>
      </div>
    </div>
  )
}

export default BookToday