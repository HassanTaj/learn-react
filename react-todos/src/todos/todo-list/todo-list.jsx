import './todo-list';

function TodoList({todos}) {
    return (<>
        <div className='py-2'>
            <ul className='list-group'>
                {todos?.map(x => <li key={`${x?.id}`} className='list-group-item my-1'>{x.task}</li>)}
            </ul>
        </div>
    </>);

}

export default TodoList;