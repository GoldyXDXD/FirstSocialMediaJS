import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className="profilePage">
            <ProfileInfo  />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;