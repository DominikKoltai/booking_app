import "./propertyList.css";
import useFetch from "../../hooks/useFetch.js";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  console.log(data);

  const images = [
    "https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg",
    "https://www.thespruce.com/thmb/FDcbd-vq3clXSTYi0JPODzG0-Q4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Emily_Hendersons_Kitchen_2-5bbaa242c9e77c0051b39061.jpg",
    "https://www.kingfisherbay.com/media/k2/items/cache/83c2446a0896df0a1f4af01c940ae1d9_XL.jpg",
    "https://l.icdbcdn.com/oh/e1224176-909c-487a-9ae0-7d8460446be9.jpg",
    "https://cdn.concreteplayground.com/content/uploads/2019/04/moonbah-hut-jindabyne-facebook-1920x1440.jpeg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
