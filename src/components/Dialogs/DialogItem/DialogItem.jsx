import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className="dialogItem m-1 borderDef border-slate-600 navLink">
      <NavLink to={path} className="px-5">
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
