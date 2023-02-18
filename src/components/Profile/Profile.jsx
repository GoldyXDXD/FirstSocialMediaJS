import MyPosts from './MyPosts/MyPosts';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/state";

const Profile = (props) => {
    return (
        <div className="profilePage">
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch={store.dispatch.bind(store)} />
        </div>
    )
}

export default Profile;