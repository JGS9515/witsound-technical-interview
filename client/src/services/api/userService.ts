import { User } from "../../types/User";
import apiService from "./apiService";
import endpoints from "./endpoints";

export default class UsersService {


    static async getUserList() {
        return apiService.get(endpoints.name).then((res: any) => {
            return res;
        });
    }

    static async postUser(user:string) {
        return apiService.post(endpoints.name, {user:user});
    }
}
