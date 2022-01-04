MyComponent.propTypes = {
    // 리액트 요소
    // <div></div>
    // <Compoenent/>
    menu: PropTypes.element,

    // 컴포넌트 함수가 반환할 수 있는 모든 것
    // number, string, array, element, ...
    description: PropTypes.node,

    // Message 클래스로 생성된 모든 객체
    // new Message()
    message: PropTypes.instanceOf(Message),

    // 배열에 포함된 값 중에서 하나를 만족
    name: PropTypes.oneOf(['11', 22]),

    // 배열에 포함된 값 중에서 하나를 만족
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // 특정 타입만 포함하는 배열
    ages: PropTypes.arrayOf(PropTypes.number),

    // 객체의 속성값 타입 정의
    info: PropTypes.shape({
        name: PropTypes.string,
        weight: PropTypes.number
    }),

    // 객체의 모든 속성값이 같은 경우
    infos: PropTypes.objectOf(PropTypes.number)
}