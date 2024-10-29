import Config from "../../../assets/icons/HeroIcons/Config";
import DashboardIcon from "../../../assets/icons/HeroIcons/DashboardIcon";
import Historial from "../../../assets/icons/HeroIcons/Historial";
import Home from "../../../assets/icons/HeroIcons/Home";
import Image from "../../../assets/icons/HeroIcons/Image";
import Person from "../../../assets/icons/HeroIcons/Person";
import SignOut from "../../../assets/icons/HeroIcons/SignOut";
import Tasks from "../../../assets/icons/HeroIcons/Tasks";
import Work from "../../../assets/icons/HeroIcons/Work";

import { IMenuMap } from "../../../models/mapping/IMenuMap";

export const leftNavBarOptions: Array<IMenuMap> = [
    {
        label: 'Dashboard',
        linkTo: 'dashboard',
        icon: <DashboardIcon />
    },
    {
        label: 'Proyectos',
        linkTo: 'user-projects',
        icon: <Work />
    },
    {
        label: 'Tareas',
        linkTo: 'tasks',
        icon: <Tasks />
    },
    {
        label: 'Amigos',
        linkTo: 'friends',
        icon: <Person />
    },
    {
        label: 'Sign Out',
        linkTo: 'deletesession',
        icon: <SignOut />
    }
];

export const TopNavBarProjectsMap:Array<IMenuMap> = [
    {
        label: 'General',
        linkTo:'general',
        icon:<Home />
    },
    {
        label:'Tareas',
        linkTo:'tasks',
        icon:<Tasks />
    },
    {
        label:'Colaboradores',
        linkTo:'collaborators',
        icon:<Person />
    },
    {
        label:'Media',
        linkTo:'media',
        icon:<Image />
    },
    {
        label:'Historial',
        linkTo:'historial',
        icon:<Historial />
    },
    {
        label:'Configuraciones',
        linkTo:'configuration',
        icon:<Config />
    }
]