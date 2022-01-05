function MyComponent(props) {

}

function isEqual(prevProps, nextProps) {
    // true 또는 false
    // false 시 리렌더링
}
React.memo(MyComponent, isEqual);