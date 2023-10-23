import { Router } from "express";
import { ServiceFn } from "../services/index.js";
import { getClientIp } from "request-ip";
const RouterFn = Router();

RouterFn.post("/add", async (req, res, next) => {
  try {
    let Ip = getClientIp(req)
    Ip=Ip.toString()
    if(Ip=="::1"){
      Ip="LocalHost"
    }
    const { ID, Text } = req.body;

    const newData = await ServiceFn.addData({
      ID,
      Text,
    });

    const newLog = await ServiceFn.addLog({
      Ip,
      ID,
      Text,
    });

    res.status(201).json(newData,newLog);
  } catch (error) {
    next(error);
  }
});

RouterFn.get("/get/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const datas = await ServiceFn.getDatas(id);

    res.status(200).json(datas);
  } catch (error) {
    next(error);
  }
});

RouterFn.get("/get", async function (req, res, next) {
  try {
    const Logs = await ServiceFn.getLogs();

    res.status(200).json(Logs);
  } catch (error) {
    next(error);
  }
});

RouterFn.delete("/delete", async function (req, res, next) {
  try {
    const datas = await ServiceFn.delDatas();

    res.status(200).json(datas);
  } catch (error) {
    next(error);
  }
});

export { RouterFn };
