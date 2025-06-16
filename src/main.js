
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from "./js/pixabay-api"; 

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';


const form = document.querySelector(".form");
const input = document.querySelector("#input-search");


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = input.value.trim();
    
    if (query === "") {
        iziToast.warning({
            position: "topLeft",
            message: "Please enter a search term!"
        });
        return;
    }
    showLoader();
    clearGallery();

    
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.info({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }
            createGallery(data.hits);
        })
        .catch(error => {
            iziToast.error({
                message: 'An error occurred. Please try again later.',
                position: 'topRight',
            });
            console.error(error);
        })
        .finally(() => {
            hideLoader();
        });
}