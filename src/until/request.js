import axios from "axios";
import { Toast } from "vant";
const baseURL = "http://localhost:3000";

const service = axios.create({
  baseURL,
  timeout: 10000,
});

service.interceptors.request.use(
  (config) => {
    Toast.loading({
      message: "加载中......",
      duration: 0,
    });
    return config;
  },
  (err) => {
    Toast.clear();
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  (response) => {
    Toast.clear();
    // if(response.status >= 200 && response.status < 300){
    //     console.log(response.data.data);
    //     const {code,data} = response.data;
    //     if(code === 200){
    //         return  response.data;
    //     }
    // }
    // const error = new Error('请求接口异常');
    // error.reason = response;
    // Toast.fail({
    //     message:'请求接口异常......',
    // })
    // return Promise.reject(error);
    return response;
  },
  (err) => {
    Toast.fail({
      message: "请求接口异常：" + err.message,
    });
    return Promise.reject(error);
  }
);

export default service;
