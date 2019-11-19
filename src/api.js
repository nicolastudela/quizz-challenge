import camelcaseKeys from "camelcase-keys";

// const delay = () =>
//   new Promise((resolve, reject) => {
//     function resol() {
//       console.log("solved");
//       // resolve("good")
//       reject("error");
//     }
//     setTimeout(resol, 1000);
//   });

const request = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // await delay()
    const payload = await response.json();
    return camelcaseKeys(payload, { deep: true });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return e;
  }
};

export default {
  request
};
