import { TRAVEL_LOCATIONS } from "../constants";

function Homepage() {
  return (
    <>
      <main>
        <section className="max-w-screen-md mx-auto py-16">
          {TRAVEL_LOCATIONS.map((props) => (
            <div
              key={props.id}
              className="grid md:grid-cols-2 place-items-center space-y-8"
            >
              <div>
                <img
                  src={props.img}
                  alt=""
                  className="w-[220px] h-[300px] rounded-2xl bg-cover mt-5 md:mt-7"
                />
              </div>
              <div>
                <div>
                  <div>
                    <div className="flex space-x-3 items-center">
                      <div className="flex space-x-1 items-center">
                        <div>
                          <img
                            src="/images/Fill 219.png"
                            alt=""
                            className=" w-3"
                          />
                        </div>
                        <div className=" uppercase tracking-widest text-lg font-light">
                          {props.location}
                        </div>
                      </div>
                      <div>
                        <a
                          href={props.link}
                          className=" border-b-2 text-[#918E9B] cursor-pointer"
                          target="_blank"
                        >
                          View on Google Map
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" space-y-4">
                  <h2 className="text-2xl mt-4 capitalize">{props.title}</h2>
                  <h3>{props.date}</h3>
                  <p className="text-justify">{props.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
export default Homepage;
