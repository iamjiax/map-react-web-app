import {useMapEvents} from "react-leaflet";
import {useSearchParams} from "react-router-dom";

const SearchParamsSetting = () => {
  const map = useMapEvents({
    moveend() {
      setSearchParams({
        "zoom": map.getZoom(),
        "lat": map.getCenter().lat,
        "lng": map.getCenter().lng
      });
    }
  });
  const [searchParams, setSearchParams] = useSearchParams();
  return null;
}

export default SearchParamsSetting;