import { Link } from "react-router-dom";

import './index.less';

export interface TabsProps {
  menu: { id: string; path: string; name: string }[];
}

const Tabs: React.FC<TabsProps> = props => {
  const { menu } = props;

  return (
    <ul className="tab">
      {menu.map(m => (
        <li key={m.id}>
          <Link to={m.path}><span>{m.name}</span></Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
