import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://aparthotel-stare-miasto-krakow.booked.hu/data/Photos/OriginalPhoto/12195/1219531/1219531900/Aparthotel-Stare-Miasto-Krakow-Exterior.JPEG"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.corinthia.com/media/2131/corinthia-budapest-executive-suite-master.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Corinthia Hotels</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://app-neos.h-hotels.com/_Resources/Persistent/5/d/5/1/5d5165882eb37610609fd5a4199d6471120881f6/zimmer-komfort-twin-zimmers-01-hyperion-hotel-berlin.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hyperion Hotel</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/woodlands/HOUWDGI_One-King_1_2D61F6DA-5056-B3A8-49CD0E011981C75F-2d61f41b5056b3a_2d61f72c-5056-b3a8-491110c45e7768a5.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;