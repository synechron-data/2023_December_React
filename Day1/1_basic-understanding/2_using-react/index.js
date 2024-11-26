// const appElement = document.getElementById('app');

// const hOneElement = document.createElement('h1');
// hOneElement.className = 'orange';
// hOneElement.textContent = 'Hello World';

// appElement.appendChild(hOneElement);

// // -----------------------------------------------------------
// const myReactElement = React.createElement('h1', { className: 'orange' }, 'Hello World');
// ReactDOM.render(myReactElement, document.getElementById('app'));

// -----------------------------------------------------------
const myReactElement = (name = 'World') => {
    return React.createElement('h1', { className: 'orange' }, `Hello ${name}`);
}

ReactDOM.render(myReactElement('Manish'), document.getElementById('app1'));
ReactDOM.render(myReactElement('Ramakant'), document.getElementById('app2'));