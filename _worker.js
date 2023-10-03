export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "api.openai.com";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    })
      .then(response => {
        if (response.ok) {
          console.log("URL 可以访问");
        } else {
          console.log("URL 不可访问");
        }
        return response;
      })
      .catch(error => {
        console.log("发生错误: ", error);
        throw error;
      });
  }
};
