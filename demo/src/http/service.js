import axios from "axios";

import { base_url } from "@/config";
import { Toast } from "vant";
//基础配置
let service = axios.create({
  baseURL: base_url, // url = base api url + request url
  //withCredentials: true, // 是否携带cookies send cookies when cross-domain requests
  timeout: 5000, //请求超时
});

let loading;

//请求拦截
service.interceptors.request.use(
  (config) => {
    //1.loading动画开启
    loading = Toast.loading({
      duration: 10000,
      message: "加载中...",
      forbidClick: true,
    });
    //2.token设置(把token添加到请求头中)
    config.headers["Authorization"] = sessionStorage.getItem("token");
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

//响应拦截

service.interceptors.response.use(
  (res) => {
    //1.关闭loading
    loading.clear();
    return Promise.resolve(res);
  },
  (error) => {
    Toast.clear();
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
