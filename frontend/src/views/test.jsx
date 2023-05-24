import { CategoriesData } from "../dataJson/CategoriesData";

const [categories, setCategories] = useState();

//useEffect logic
useEffect(() => {
  const CategoriesArray = [];
  CategoriesData.map((group) => {
    group.categories.map((categorie) => CategoriesArray.push(categorie));
  });
  setCategories(CategoriesArray);
}, [categories]);

//input logic
{
  CategoriesData?.map((group) => (
    <label
      key={group.groupName}
      className="flex items-center bg-gray-300 max-w-lg rounded-full py-1 px-3 transition duration-250 hover:bg-white cursor-pointer"
      htmlFor={group.groupName}
      style={
        checkedInterests.includes(group.groupName)
          ? { backgroundColor: "#7869e6", color: "white" }
          : {}
      }
    >
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          id={group.groupName}
          value={group.groupName}
          onChange={(e) => handleInterestCheck(e)}
          checked={checkedInterests.includes(group.groupName)}
          className="form-checkbox h-4 w-4 text-primary"
          style={{ display: "none" }}
        />

        <span
          className="ml-2 text-lg font-medium text-gray-700 w-full"
          style={
            checkedInterests.includes(group.groupName) ? { color: "white" } : {}
          }
        >
          {group.groupName}
        </span>
      </div>
    </label>
  ));
}
