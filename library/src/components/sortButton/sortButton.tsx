import React from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import "./sort.css";
const SortButton = (props: {
  sortByName: String[];
  setSortByName: any;
  isRequired: boolean;
  name: string;
}) => {
  const { sortByName, setSortByName, name, isRequired } = props;
  const data = sortByName;
  const up = data[1] === "Asc" && data[0] === name ? "up" : "";
  const down = data[1] === "Desc" && data[0] === name ? "up" : "";

  return (
    <div className="buttonComponent">
      <div>{name}</div>
      {isRequired && (
        <div className="button-sort">
          <FaSortUp
            className={`${up}`}
            onClick={() => setSortByName([name, "Asc"])}
          />
          <FaSortDown
            className={`${down}`}
            onClick={() => setSortByName([name, "Desc"])}
          />
        </div>
      )}
    </div>
  );
};

export default SortButton;
