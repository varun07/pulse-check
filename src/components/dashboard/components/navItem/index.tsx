import { Link } from "react-router-dom";

import './styles.scss';

export default function NavItem(props: any) {
  return (
    <div className="dashboard-side-nav-item">
      <Link to={props.to} className="">
        {props.children}  
      </Link>
    </div>
  )
}
