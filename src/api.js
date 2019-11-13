

// const delay = () => new Promise((resolve, reject)=> {
//   function resol() {
//     console.log("solved")
//     resolve("good")
//     // reject("error")
//   }
//   setTimeout(resol,8000)
// })

const request = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
 
    // await delay() 
    return await response.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default {
  request
};
