import ProfilePic from "../component/profilePic";
import SocialMedia from "../component/socialMedia";
import NavigationItem from "../component/navigation-item";
const sidebar=props=>{

    let show=props.show? "sidebar-show": "";
    return(
            <div className={show+" sidebar"}>
                <ProfilePic/>
                <h4 className="heading__4 sidebar__name">Offokansi Kenechukwu</h4>
                <div className="sidebar__socialMedia">
                    <SocialMedia/>
                </div>
                <div className="sidebar__navigation">
                    <NavigationItem/>
                </div>
                
            </div>
            
            );
}

export default sidebar; 