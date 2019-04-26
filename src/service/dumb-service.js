export function getSomething() {
    return fetch("https://dnd-express-server.herokuapp.com/something")
        .then((data) => data.json())
        .catch((error) => {
            throw new Error(error);
        });
}

export function fetchSpell() {
    const baseUrl = "https://dndtools.net/spells/";
    const booksUrl =
      "?rulebook__dnd_edition__slug=core-35&rulebook__dnd_edition__slug=supplementals-35";
    // const classesUrl = `&class_levels__slug=${classes}`;
  
    // const anyOrigin = "https://cors-anywhere.herokuapp.com/";
    const fetchUrl = `${baseUrl}${booksUrl}&page_size=100`;
  
    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }
  
    function json(response) {
      return response.json();
    }
  
    fetch(fetchUrl, { method: "GET" })
      .then(status)
      .then(json)
      .catch(error => {
        throw new Error(error);
        // console.log("Request failed", error);
      });
  }