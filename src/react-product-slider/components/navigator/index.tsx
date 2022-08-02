import { NavigatorContainer } from "./style";
type navigatorProps = {
  selected: number;
  count: number;
  navigate: (direction: string) => void;
};
const Navigator: React.FC<navigatorProps> = ({ selected, count, navigate }) => {
  return (
    <NavigatorContainer>
      <div className="next" onClick={(e) => {e.stopPropagation();navigate("next")}}>
        &#8592;
      </div>
      <div className="map">
        {selected + 1}/{count}
      </div>
      <div className="prev" onClick={(e) => {e.stopPropagation();navigate("prev")}}>
        &#8594;
      </div>
    </NavigatorContainer>
  );
};
export default Navigator;
