const API_ROOT = 'https://jsonplaceholder.typicode.com';

const customFetch = async (url, { body, ...customConfig }) => {
    const headers = {
        'Content-type': 'application/json; charset=UTF-8',
      };
  
    const config = {
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    };
  
    if (body) {
      config.body =JSON.stringify(body);
    }
  
    try {
      const response = await fetch(url, config);
      console.log("url=",url,"config=",config)
      const data = await response.json();
  
      if (data) {
        return {
          data: data.data,
          success: true,
        };
      }
  
    } catch (error) {
      console.error('error');
      return {
        message: error.message,
        success: false,
      };
    }
  };

//   //costume function for getTodo
//   export const getTodo = () => {
//     const API_URLS=`${API_ROOT}/todos`;
//     return customFetch(API_URLS, {
//       method: 'GET',
//     });
//   };

//   //costume function for postTodo
//   export const postTodo = () => {
//     const API_URLS=`${API_ROOT}/posts`;
//     return customFetch(API_URLS, {
//       method: 'POST',
//     });
//   };

//   //costume function for deleteTodo
//   export const deleteTodo = (id) => {
//     const API_URLS=`${API_ROOT}/posts/${id}`;
//     return customFetch(API_URLS, {
//       method: 'DELETE',
//     });
//   };

//   //costume function for updateTodo
//   export const updateTodo = (id) => {
//     const API_URLS=`${API_ROOT}/posts/${id}`;
//     return customFetch(API_URLS, {
//       method: 'PUT',
//     });
//   };

