import s from "./style.module.css";
import { CityListItem } from "../CityListItem/CityListItem";
import { ArrowClockwise, Geo } from "react-bootstrap-icons";
import { Pin } from "react-bootstrap-icons";

export function CityList({
  selectedCity,
  placeList,
  userPositionInfo,
  onClickTrash,
  onClickCity,
}) {
  return (
    <>
      <div className={s.list_title}>
        <Pin /> Pinned ({placeList.length})
      </div>
      <div className={s.list}>
        {/* DISPLAY USER POSITION */}
        <span className={s.city_item}>
          <span className={s.your_position}>
            <Geo /> live
          </span>
          {!userPositionInfo && (
            <div className={s.position_loading}>
              <ArrowClockwise />
              Loading
            </div>
          )}
          {userPositionInfo && (
            <CityListItem
              city={userPositionInfo}
              selectedCity={selectedCity}
              onClickCity={onClickCity}
            />
          )}
        </span>
        {/* DISPLAY OTHER CITIES FROM placeList */}
        {placeList.map((city, i) => {
          return (
            <span className={s.city_item}>
              {city && (
                <CityListItem
                  key={city + i}
                  city={city}
                  selectedCity={selectedCity}
                  onClickTrash={onClickTrash}
                  onClickCity={onClickCity}
                />
              )}
            </span>
          );
        })}
      </div>
    </>
  );
}
