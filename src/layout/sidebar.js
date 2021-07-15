import ProfilePic from "../component/profilePic";
import SocialMedia from "../component/socialMedia";
import NavigationItem from "../component/navigation-item";
const sidebar=props=>{
    return(
        <div className="sidebar__container">
            <div className="sidebar">
                <ProfilePic/>
                <h4 className="heading__4 sidebar__name">Offokansi Kenechukwu</h4>
                <div className="sidebar__socialMedia">
                    <SocialMedia/>
                </div>
                <div className="sidebar__navigation">
                    <NavigationItem/>
                </div>
                
            </div>
        </div>
        );
}

export default sidebar; 