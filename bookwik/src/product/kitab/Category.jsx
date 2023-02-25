import React from "react";
const Category = ({ categories, filterCategory, setFilterCategory }) => {
  const handleChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterCategory, input.value];
      setFilterCategory(state);
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
    }
  };
  return (
    <div id="category_div">
      <h5>Filter By Category</h5>
      <div className="category_container">
        {categories.map((category) => (
          <div key={category}>
            <input
              id="cat_box"
              type="checkbox"
              value={category}
              onChange={handleChange}
            />
            <p id="cat_title">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
