import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch("/hotels/countByCity?cities=Madrid,Budapest,Berlin");

  return (
    <div className="featured">
      {loading ? ("Loading, please wait!") : (
      <>
        <div className="featuredItem">
          <img
            src="https://hellovilagvlog.hu/wp-content/uploads/2023/05/Madrid-kirandulasok-Toledo-1160x775.jpeg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://kep.index.hu/1/0/2690/26906/269065/26906569_2063157_3af6bdb7f201e13f67a1770d9eff9d9f_wm.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Budapest</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://lvcontent.net/imp_wallpapers/30243/alternative-1.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default Featured;