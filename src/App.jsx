import { useEffect, useState } from "react";


const App = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    fetch('https://tiny-car-server.vercel.app/cars')
      .then(res => res.json())
      .then(data => setCars(data))
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!{cars.length}
      </h1>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            {/* <img src={cars[0].image_url} alt="" /> */}
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;