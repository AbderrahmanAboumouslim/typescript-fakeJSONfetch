import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users/1";
axios.get(url).then((res) => console.log(res.data));
