const Filter = () => {
  return (
    <div className="absolute z-10 flex flex-col items-start">
      <div className="ml-36 mt-10 max-w-sm rounded-lg bg-white shadow-lg">
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8">
            <h1 className="inter mb-3 text-lg font-bold text-[#004C98]">FILTER</h1>
            <div className="mb-4">
            <label className="inter mb-2 block text-lg font-medium text-[#004C98]">
                By Month
            </label>
            <input className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none" id="username" type="text"/>
            </div>
            <div className="mb-4">
            <label className="inter mb-2 block text-lg font-medium text-[#004C98]">
                By Department
            </label>
            <input className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none" id="username" type="text"/>
            </div>
            <div>
            <label className="inter mb-2 block text-lg font-medium text-[#004C98]">
                By Event Type
            </label>
            <input className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none" id="username" type="text"/>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
