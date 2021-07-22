import * as express from "express";
import {
  GetChirp,
  GetChirps,
  DeleteChirp,
  UpdateChirp,
  CreateChirp,
} from "../chirpstore";
const router = express.Router();

// console.log("hey")
router.get("/:id?", (req, res) => {
  const id = req.params.id;
  // 38:00 on walkthrough confused
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

router.post("/", (req, res, err) => {
  const chirp = req.body;

  // 45:00 getting error in postman but still created json file
  // if(err){
  //     throw(err)
  // }else {
  CreateChirp(chirp);
  res.send("success");
  //     res.sendStatus(200)
  // }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  res.send(UpdateChirp(id, req.body));
});

router.delete("/:id", (req, res) => {
  DeleteChirp(req.params.id);
  res.send("succesfully deleted");
});

export default router;
