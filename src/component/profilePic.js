import picture from "../img/profile-pic.jpg";

let profilePic=props=>{
    return (
    <figure className="profilePic">
        <img src={picture} alt="profile pic" className="profilePic__img" />
    </figure>
);
}

export default profilePic;