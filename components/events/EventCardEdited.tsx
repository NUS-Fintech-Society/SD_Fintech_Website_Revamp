// import { EventCardProps } from '@interfaces/events/EventCard';

// library
// import Link from 'next/link';

const EventCardEdited = () => {
  return (
    <div className="inter relative h-[124px] w-[140px] gap-32 rounded-3xl bg-[#FFFFFF]/50 p-8 text-[#004C98] shadow-lg hover:-translate-y-1 sm:h-[318px] sm:w-[310px]">
    <div className="">
      <span className="text-xs sm:text-6xl">
        06
      </span>
      <span className="flex-col">November 7.30 P.M.</span>
    </div>
    <h2 className="mt-1 font-bold sm:text-3xl">Event Name</h2>
    <div className="h-30 mt-1 sm:text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minima impedit tempora velit dicta nulla dignissimos exercitationem tenetur voluptatum illum suscipit</div>
    <button type="button" className="mt-4 mb-2 w-full rounded-3xl border border-[#004C98] bg-transparent py-2 px-4 font-semibold hover:border-transparent hover:bg-[#004C98] hover:text-white hover:transition-all">Book Now</button>
  </div>
  );
};

export default EventCardEdited;