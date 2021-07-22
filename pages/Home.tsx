import express from "express";
import * as React from "react";
import { useState, useEffect } from "react";
import {
    GetChirp,
    GetChirps,
    DeleteChirp,
    UpdateChirp,
    CreateChirp,
  } from '../src/server/chirpstore';
  const router = express.Router();

const Home = (props) => {
    router.get("/:id?", (req, res) => {
        const id = req.params.id;
        
        if (id) {
          res.send(GetChirp(id));
        } else {
          const chirps = GetChirps();
          let chirpArr: any[] = [];
          Object.keys(chirps).map((key) =>
            chirpArr.push({ id: key, name: chirps[key].name, msg: chirps[key].msg })
          );
          chirpArr.pop();
          res.send(chirpArr);
        }
      });
    return (
        // const [chirps, setchirps] = setState([])
        <>
        <h1> This is your home Coraline..... now</h1>
        <ul >{chiprArr.map(chirps => 
            <li>(chirps)</li>)}</ul>
  </>)
};

export default Home;