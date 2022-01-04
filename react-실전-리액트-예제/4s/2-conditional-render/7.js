function Greeting({isEvent, isLogin, name, cash}) {
    return (
        <div>
            저희 사이트에 방문해 주셔서 감사합니다.
            { isEvent && (
                <div>
                    이벤트
                </div>
            )}

            { !isEvent && isLogin && cash <= 10000 && (
                <div>
                    asdasd
                </div>
            )}
        </div>
    )
}