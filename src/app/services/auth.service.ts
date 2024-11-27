import axios from "axios";
import { API_DEV_URI } from "../const/token";
import { PostRegisterReqBody } from "../entities/PostRegisterReq.interface";

const base_url = API_DEV_URI + `auth/`;

export class AuthService {

    postRegister(body: PostRegisterReqBody): void {
        const url = base_url +  `register/`;
        
        axios
          .post(url, body)
          .then((res) => {
          })
          .finally(() => {
          });

    }
}