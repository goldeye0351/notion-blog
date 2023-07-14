
import { StarIcon, CodeIcon, CubeIcon, AnnotationIcon,  BadgeCheckIcon, BeakerIcon, BellIcon, CogIcon, CubeTransparentIcon } from "@heroicons/react/outline"

const Mytesticon = ( index ) =>{

switch ( index.index ) {
    case 0 :
        return<CodeIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-blue-300 dark:bg-blue-500"/>;
        break;  
    case 1 :
        return<CubeIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-green-300 dark:bg-green-500"/>;
        break;  
    case 2 :
        return<BellIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-indigo-300 dark:bg-indigo-500 "/>;
        break;  
    case 3 :
        return<CogIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-red-300 dark:bg-red-500"/>;
        break;  
    case 4 :
        return<LightningBoltIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-amber-300 dark:bg-amber-500 "/>;
        break;  
    default :  
        return<StarIcon className="  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-rose-200  dark:bg-rose-500 "/>;

}
}

export default Mytesticon