import useNavigationContext from "../../hooks/use-navigation";

function Route({ children, displayPath }) {
    const { currentPath } = useNavigationContext();
    if (currentPath === displayPath) {
        return children;
    } else {
        return;
    }

}

export default Route;