import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://kartinkin.net/pics/uploads/posts/2022-08/1660363378_18-kartinkin-net-p-valli-oboi-na-rabochii-stol-krasivo-19.jpg",
                    followed: true,
                    fullName: "Nick",
                    status: 'A YA NIKITA',
                    location: {city: 'Balashikha', country: "Russia"}
                },
                {
                    id: 2,
                    photoUrl: "https://disney-planet.fr/wp-content/uploads/2010/04/m-o-personnage-wall-e-05.jpg",
                    followed: false,
                    fullName: "Katya",
                    status: 'Solo 322',
                    location: {city: 'Moscow', country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://a.d-cd.net/B0AAAgN1-OA-1920.jpg",
                    followed: true,
                    fullName: "Mikhail",
                    status: 'qwerty',
                    location: {city: 'Moscow', country: "Russia"}
                },
                {
                    id: 4,
                    photoUrl: "https://kg-portal.ru/img/100899/main_2x.jpg",
                    followed: true,
                    fullName: "Evgeniy",
                    status: 'pudge',
                    location: {city: 'Zheleznodorozhniy', country: "Russia"}
                },
                {
                    id: 5,
                    photoUrl: "https://kartinkin.net/uploads/posts/2022-10/1665534097_3-kartinkin-net-p-chelovek-benzopila-pauer-art-instagram-3.jpg",
                    followed: false,
                    fullName: "Svyat",
                    status: 'privet medved',
                    location: {city: 'Belgrade', country: "Serbia"}
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;