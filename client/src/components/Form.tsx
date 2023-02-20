// import { OutlinedInput } from "@mui/material";
import { useEffect, useState } from "react";
import UsersService from "../services/api/userService";
import { User } from "../types/User";
import List from "./List";

export const inputStyle = {
    marginTop: "12px",
    height: "44px",
    borderRadius: "10px",
    padding: "7px 14px 10px 0px",
    background: "#F0F0F0",
    color: 'black'
};
function Form() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [userList, setUserList] = useState<User[]>([]);
    
    const saveName = () => {
        UsersService.postUser(name).catch((e) => {
            setError(e.response.data.error[0].constraints.error)
            return console.log(e)
        });
        getUserList();
        setName('');
        setError('');
    }

    const getUserList = () => {
        UsersService.getUserList().then((res) => {
            console.log(res.data)
            setUserList(res.data);
        });
    };

    useEffect(() => {
        getUserList();
    }, []);


    return (
        <div className="App">
            <input
                style={{ ...inputStyle, marginTop: "0" }}
                type="text"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                placeholder="Name"
            />
            <button onClick={saveName}>Submit</button>
            <br/>
            {error}
            <List userList={userList} />

        </div>
    );
}

export default Form;