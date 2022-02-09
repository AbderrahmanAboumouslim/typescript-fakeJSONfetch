import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users/1";

interface User {
  id: number;
  name: string;
  email: string;
}

axios.get(url).then((res) => {
  const user: User = res.data; //other way:   const user: User = res.data as User;

  const { id, name, email } = user;
  console.log(`
   User's name: ${name}
   ID is : ${id}
   and email: ${email} `);
});
