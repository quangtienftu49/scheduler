import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  return (
    <ul>
      {props.days.map((item, index) => {
        return (
          <DayListItem
            key={item.id}
            name={item.name}
            spots={item.spots}
            selected={item.name === props.day}
            setDay={props.setDay}
          />
        )
      })}
    </ul>
  );
}