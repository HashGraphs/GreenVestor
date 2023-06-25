const SubscribeSection = () => {
    return (
      <section className="bg-[#F5F5F5] py-10 ">
        <div className="w-4/5 mx-auto flex flex-col sm:flex-row justify-around items-center">
          <article className="flex flex-col w-[95%] sm:w-[40%] ">
            <h1 className="text-3xl font-bold mt-12 text-start ">
              Interested in Tendering? Join with us now
            </h1>
            <h3 className="my-5">
            TenderHive is a blockchain based application that makes it easy to
              advertise and apply for tenders with the highest level of
              transparency.
            </h3>
          </article>
          <article className="flex flex-col justify-around w-[95%] sm:w-[50%] ">
            <p>Newsletter</p>
            <div className="bg-[#EFEFFF] rounded-2xl flex flex-col justify-around h-[200px] p-2 sm:p-5 ">
              <h3 className="font-bold">Get monthly updates on your inbox</h3>
              <span className="flex items-center justify-center bg-white rounded-md">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your Email.."
                  className="p-3 w-[80%]"
                />
                <button className="rounded-2xl border text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none px-5 py-3 my-2">
                  Subscribe
                </button>
              </span>
              <p>We won’t spam you at all!</p>
            </div>
          </article>
        </div>
      </section>
    );
  };
  
  export default SubscribeSection;