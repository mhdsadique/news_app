import  axios from "axios";
export const PostAPI=(page,query,language,qInTitle)=>{
    return axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2023-03-11&sortBy=publishedAt&apiKey=43453fac61ac467699a3c32bc8078db8&page=${page}&language=${language}&qInTitle=${qInTitle}`)
    // return axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-03-10&sortBy=publishedAt&apiKey=43453fac61ac467699a3c32bc8078db8")
.then((d) =>d.data.articles);
}