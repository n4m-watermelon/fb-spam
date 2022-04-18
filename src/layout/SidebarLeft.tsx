import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
interface Props {
  collapsed: boolean;
}

const { Sider } = Layout;
function SidebarLeft({ collapsed }: Props) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="logo">My logo</div> */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/comment">Comment</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SidebarLeft;
