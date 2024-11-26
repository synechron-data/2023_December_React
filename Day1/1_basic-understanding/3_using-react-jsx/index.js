// const myReactElement = React.createElement('h1', { className: 'orange' }, 'Hello World');
// ReactDOM.render(myReactElement, document.getElementById('app'));

// -----------------------------------------------------------

const MyReactElement = () => {
    return (
        <h1 className='orange'>
            Hello World!
        </h1>
    );
};

ReactDOM.render(<MyReactElement />, document.getElementById('app'));