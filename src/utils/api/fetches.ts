const defaultPost = async (bodyRequest: any, url: string) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      let errorMessage = "Unknown error occurred";

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || "An error occurred";
      } else {
        errorMessage = await response.text();
      }

      throw new Error(errorMessage);
    }

    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in defaultPost:", error.message);
      throw error;
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const defaultPostWithCredentials = async (bodyRequest: any, url: string) => {
  try {
    const response = await fetch(url, {
      credentials: "include",
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      let errorMessage = "Unknown error occurred";

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || "An error occurred";
      } else {
        errorMessage = await response.text();
      }

      throw new Error(errorMessage);
    }

    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const defaultGet = async (url: string, params: string = "") => {
  try {
    const response = await fetch(url + params);
    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      let errorMessage = "Unknown error occurred";

      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || "An error occurred";
      } else {
        errorMessage = await response.text();
      }

      throw new Error(errorMessage);
    }

    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return null;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const defaultGetWithCredentials = async(url:string, params:string = '') => {
    try {
      const response = await fetch(url + params, {
        credentials:'include'
      });
      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage = "Unknown error occurred";
  
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || "An error occurred";
        } else {
          errorMessage = await response.text();
        }
  
        throw new Error(errorMessage);
      }
  
      if (
        response.status === 204 ||
        response.headers.get("content-length") === "0"
      ) {
        return null;
      }
  
      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error("An unknown error occurred");
      }
    }
}

export default { defaultPost, defaultPostWithCredentials, defaultGet, defaultGetWithCredentials };
