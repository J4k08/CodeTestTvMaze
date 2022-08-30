import Axios from 'axios';
import React, { useState, useEffect, cloneElement } from 'react';
import { runOnJS } from 'react-native-reanimated';
import { Series, Show } from '../Model/Shows';


// public function, calls api and returns data
export const getShowdata = async (input:string) => {
    
    return api(input);
}

// sends request to tvmaze api and returns response
async function api(input:string):Promise<Series[]> {


    let shows: Series[] = []
    const URL = `https://api.tvmaze.com/search/shows?q=${input}`;
    fetch(URL)
        .then(response => response.json())
        .then(jsonData => {
            const result = jsonData.map(element => element.show);
            shows = parseResult(result);
            console.log(shows);
    });
    return shows;
}
// parses json to array (Series) with Shows, returns 
const parseResult = (resultData:any):Series[] => {

    let shows:Series[] = [];
    let show:Show;
    let series:Series;

    resultData.forEach(element => {

        show = {
            name: element.name,
            id: element.id,
            summary: element.summary,
            image: {
                medium: element.image.medium
            },
            url: element.url,        
        }

        series = {
            show: show,
        }
        shows.push(series);

    });

    return shows;
}