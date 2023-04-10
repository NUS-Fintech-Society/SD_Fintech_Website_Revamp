const EventTicket = () => {
    return (
        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-[#EFEEF6]">
            <div className="col-span-2">
                <h1 class>EVENT 1</h1>
            </div>
            <div className="col-span-1">
                <button type="button" className="text-white bg-blue-700
                 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    BOOK NOW
                </button>
            </div>
        </div>
    );
};

export default EventTicket;