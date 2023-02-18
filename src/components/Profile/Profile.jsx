import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/ReduxStore";

const Profile = (props) => {
    return (
        <div className="profilePage">
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={store.dispatch} />
        </div>
    )
}

export default Profile;