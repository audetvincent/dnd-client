export function getSomething() {
    fetch("https://dnd-express-server.herokuapp.com/something").then((data) => console.log('something', data));
}