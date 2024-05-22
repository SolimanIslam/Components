import classNames from "classnames";
import useNavigationContext from "../../hooks/use-navigation";


function Link({ children, path, className}) {
    
    const { currentPath , navigateTo} = useNavigationContext();

    const activeLinkStyling = "font-bold border-l-4 border-blue-500 pl-2"; 

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === path && activeLinkStyling);

    const handleClicks = (event)=>{
        if (event.ctrlKey || event.metaKey) return;

        event.preventDefault();
        navigateTo(path);
    }

    return <a
        href={path}
        className={classes}
        onClick={handleClicks}
    >
        {children}
    </a>
}

export default Link;