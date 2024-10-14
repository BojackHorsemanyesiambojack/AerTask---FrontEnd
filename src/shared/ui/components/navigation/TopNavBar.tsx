import { useNavigate } from "react-router-dom";
import { IMenuMap } from "../../../../models/mapping/IMenuMap";
import { TopNavBarProjectsMap } from "../../data/InterfacesMapping";

export default function TopNavBar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-3/4 min-h-12 flex items-end px-6">
        <div className="flex items-center w-full justify-between">
          {TopNavBarProjectsMap.map((current: IMenuMap, index) => (
            <div
              className="flex items-center hover:cursor-pointer hover:text-violet-400"
              onClick={() => navigate(current.linkTo)}
            >
              {current.icon}
              <a
                key={index}
                className="font-semibold text-sm
                transition-all lg:block hidden
                "
              >
                {current.label}
              </a>
            </div>
          ))}
        </div>
      </nav>
      <hr />
    </>
  );
}
