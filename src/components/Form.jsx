import image from "../assets/form/modern-office-building-at-marunouchi-plaza-during-twilight-portrait-orientation-W0XMCR.jpg";

const Form = () => {
  return (
    <div
      className="lg:h-[850px]lg: bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* main */}
      <div className="lg:h-[800px]lg: mx-auto grid max-w-[1240px] p-3 lg:grid-cols-3 lg:p-10">
        {/* form */}
        <form
          action=""
          className=" rounded-2xl bg-white font-poppin lg:col-span-2 lg:w-full  lg:rounded-l-3xl lg:p-0"
        >
          <h1 className="pt-10 text-center text-3xl font-semibold lg:text-4xl ">
            Get in touch with us
          </h1>
          <h3 className="p-6 text-center text-lg lg:text-[23px]">
            Get our dedicated corporates team to discuss your needs.
          </h3>
          {/* input wrapper */}
          <div className="grid p-4 lg:grid-cols-2">
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="First Name"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="Job Title"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="Organization"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="Number of employees"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="Email"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-4 lg:m-6 lg:h-[50px] lg:w-[350px]"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="m-2 w-[280px] rounded-lg bg-gray-200 p-10 lg:m-6 lg:h-[150px] lg:w-[690px]"
              placeholder="Your query"
            />
          </div>
          <button className=" mx-6 mb-4 rounded-full bg-blue-500 px-12 py-3 font-poppin font-semibold text-white lg:mx-10 lg:my-5">
            Send
          </button>
        </form>
        {/* info */}
        <div className="hidden flex-col justify-center rounded-r-3xl bg-blue-600 px-7 font-poppin text-white lg:flex">
          <p className="py-3 text-xl font-bold">Need more info?</p>
          <p className="">
            What to know more about what DocTime has to offer your business? Or
            if you would like to organize an introductory call, let us know.
          </p>
          <div className="my-12 rounded-lg bg-white p-4 font-poppin text-[16px] text-gray-600 shadow-xl">
            <a>corporate@doctime.com.bd</a>
            <p>09513541384</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
