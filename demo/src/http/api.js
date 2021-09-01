import service from "./service";
import require from "./require";

//定义请求方法，然后导出
//获取验证码
export function smsCode(arg) {
  return service({ url: require.smsCode, data: arg, method: "post" });
}
export function login(arg) {
  return service({ url: require.login, data: arg, method: "post" });
}
export function banner(arg) {
  return service({ url: require.banner, data: arg, method: "get" });
}
export function appIndex(arg) {
  return service({ url: require.appIndex, data: arg, method: "get" });
}
export function password(arg) {
  return service({ url: require.password, data: arg, method: "post" });
}
export function signin(arg) {
  return service({ url: require.signin, data: arg, method: "get" });
}
