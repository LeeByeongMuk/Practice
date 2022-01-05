 function App({user}) {
    return (
        <div>
            <p>사용자 정보</p>
            <UserDetail key={user.id} user={user} />
        </div>
    )
 }

 function UserDetail({user}) {

 }