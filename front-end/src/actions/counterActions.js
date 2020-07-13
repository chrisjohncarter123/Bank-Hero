export const fetchCounter = () => {
    const options = {
      method: "GET",
      headers: {

      },
    };
    return async (dispatch) => {

    const res = await fetch(BASEURL + "users", options);
    const json = await res.json();

      dispatch({
        type: "STORAGE_USERS",
        payload: json,
      });
    };
  };