import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
const ProductSidebar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div>
      <button onClick={() => collapseSidebar()}>Collapse</button>
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProductSidebar;
