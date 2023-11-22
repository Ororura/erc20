import Main from "../ui/page/main/Main"
import Login from "../ui/page/main/Login";
import Reg from "../ui/page/main/Reg"

interface IRouteType{
    path: string;
    component: () => JSX.Element;
}

const Routes: IRouteType[] = [
    {path: "/", component: Main},
    {path: "/login", component: Login},
    {path: "/registration", component: Reg}
];

export default Routes;