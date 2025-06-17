import axios from 'axios';


export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: "50837011-c76ef50eb9608d9d0e02a1779",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
            per_page: 60
       }, 
    }).then(response => response.data);
   
}
