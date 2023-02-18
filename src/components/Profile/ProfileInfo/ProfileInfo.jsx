import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className="avaCoverDescription">
            <div className={s.cover + " " + s.profileImage}>
                <img src="http://pristor.ru/wp-content/uploads/2018/04/Красивые-картинки-для-обложки-в-ВК-1590х400-коллекция-картинок-15.jpg" />
                {/*<img src='https://i.pinimg.com/originals/4f/d7/bf/4fd7bf44ab7d8857d0f68de504e6001e.jpg'/>*/}
            </div>
            <div className={s.avatarWrapper}>
                {/*<img className={s.avatar} src='https://as2.ftcdn.net/jpg/00/64/78/03/1000_F_64780399_HuC7WbohhNSglbKJeiP4qVY7G5fjA2pH.jpg'/>*/}
                <img className={s.avatar} src="https://tlum.ru/uploads/026504e0d71d67e6cc2f3a4d318fe47f7b732077c6b876b14485e592f05e249b.jpeg" />

                <div className="avatar-border"></div>
            </div>
        </div>
    )
}

export default ProfileInfo;