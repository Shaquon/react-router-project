import React, { useEffect } from "react";

const Vans = () => {
  const [vans, setVans] = useState([]);
  console.log("hellp");
  useEffect(() => {
    console.log("running");
    const fetchVans = async () => {
      const response = await fetch("/api/vans");
      console.log("hydratedResponse", await response.json());
    };

    fetchVans();
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    );
  }, []);

  return (
    <div className="van-list-container">
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
