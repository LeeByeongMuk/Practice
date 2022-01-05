const prevProps = {
    todos: [
        { title: 'fix bug',  priority: 'high'}
    ],
    friends: []
}

const nextProps = {
    todos: [
        {title: 'fix bug', priority: 'low'}
    ],
    friends: []
}

const isEqual = prevProps.todos === nextProps.todos && prevProps.friends === nextProps.friends;
// 리액트에서 사용하는 memo 기본 비교 함수