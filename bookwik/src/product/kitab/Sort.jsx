import React from "react";
const Sort = ({ sort, setSort }) => {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };
  const onArrowChange = () => {
    if (sort.order === "desc") {
      setSort({ sort: sort.sort, order: "asc" });
    } else {
      setSort({ sort: sort.sort, order: "desc" });
    }
  };
  return (
    <div id="sort_div">
      <p>SortBy:</p>
      <select defaultValue={sort.sort} onChange={onSelectChange}>
        <option value="ratings">Rating</option>
        <option value="price">Price</option>
      </select>
      {/* <button onClick={onArrowChange}>toggle</button> */}
    </div>
  );
};
export default Sort;
