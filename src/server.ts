import { serverHttp } from "./app";

serverHttp.listen(4001, () => console.log(`Server is running on PORT 4001.
http://localhost:4001 && http://localhost:4001/github`))