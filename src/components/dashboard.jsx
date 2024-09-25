import { Dropdown, Icon } from "semantic-ui-react";
import WidgetCustomization from "./widgetCustomization";
import { useState } from "react";
import Widget from "./widget";
import AddWidget from "./addWidget";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ searchQuery }) => {
  const [showAddWidget, setShowAddWidget] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const categories = useSelector((state) => state.widget.categories);
  const handleWidgetAddition = (id) => {
    setCategoryId(id);
    setShowAddWidget(true);
  };
  const handleCustomization = (id) => {
    setCategoryId(id);
    setShowCustomization(true);
  };
  const handleCancelWidgetAddition = () => {
    setShowAddWidget(false);
  };
  const handleCancelCustomization = () => {
    setShowCustomization(false);
  };
  const trigger = (
    <button disabled>
      <div className="flex flex-row items-center gap-2 ">
        <div className="flex flex-row items-start">
          <Icon name="time" className="text-[blue]" />
          <div className="w-[1px] h-5 bg-[blue]"></div>
        </div>
        <p className="text-[blue]">Last 2 days</p>
      </div>
    </button>
  );
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter((widget) =>
        widget.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.widgets.length > 0);

  return (
    <div className="w-full h-full pb-5 bg-[#bed7f0]">
      <div className="flex flex-row justify-between px-10 py-8">
        <p className="font-extrabold text-lg">CNAPP Dashboard</p>
        <div className="flex flex-row gap-4 items-center">
          <button
            className="p-1.5 bg-[#fff] border-[1.5px] border-gray-200 rounded-md"
            onClick={() => handleWidgetAddition(null)}
          >
            Add Widget <span className="text-xl mr-1 ml-1">+</span>
          </button>
          <button
            className="bg-[#fff] border-[1.5px] border-gray-200 rounded-md p-1.5"
            onClick={() => window.location.reload()}
          >
            <Icon name="sync alternate" />
          </button>
          <button className="bg-[#fff] border-[1.5px] border-gray-200 rounded-md p-1.5">
            <Icon
              name="ellipsis vertical"
              className="flex justify-center items-center"
            />
          </button>
          <Dropdown
            trigger={trigger}
            className="text-[blue] bg-[#fff] border border-[blue] rounded-md p-1.5"
          />
        </div>
      </div>
      {filteredCategories.length > 0 ? (
        filteredCategories.map((item) => (
          <div key={item.id} className="flex flex-col mb-5 px-10">
            <Widget
              category={item}
              open={() => handleWidgetAddition(item.id)}
              customize={() => handleCustomization(item.id)}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No widgets found</p>
      )}
      <AddWidget
        showAddWidget={showAddWidget}
        cancel={handleCancelWidgetAddition}
        categoryId={categoryId}
      />
      <WidgetCustomization
        showCustomization={showCustomization}
        close={handleCancelCustomization}
        categoryId={categoryId}
      />
    </div>
  );
};

Dashboard.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default Dashboard;
