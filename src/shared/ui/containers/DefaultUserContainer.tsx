import { Avatar } from "react-profile-avatar";
import { ProjectUser } from "../../../models/types/Sesion";
import Config from "../../../assets/icons/HeroIcons/Config";

export default function DefaultColaboratorContainer({
  user,
  isColumn,
  AvatarWidth,
  ShowConfigIcon,
  ConfigIconFunc
}: {
  user: ProjectUser;
  isColumn?: boolean;
  AvatarWidth?: number;
  ShowConfigIcon?:boolean;
  ConfigIconFunc?:Function
}) {
  return (
    <div
      className="flex p-2 items-center w-full hover:cursor-pointer hover:bg-zinc-700 transition-all my-3 rounded-md
      justify-between
      "
      style={{ flexDirection: isColumn ? "column" : "row"}}
    >
      <div className="flex items-center justify-center">
      <Avatar
        initials={user.userName[0]}
        colour="gray"
        size={AvatarWidth? AvatarWidth : 45}
        className="rounded-md text-center"
      />
      <div className="ml-2">
        <p className="text-lg font-bold">{user.userName}</p>
        <p className="text-zinc-600">{user.userRole}</p>
      </div>
      </div>
      {ShowConfigIcon && (
        <div onClick={() => ConfigIconFunc}>
          <Config />
        </div>
      )}
    </div>
  );
}
