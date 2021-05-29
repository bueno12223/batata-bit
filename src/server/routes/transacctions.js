import axios from 'axios';

const transacctionsRoutes = (app) => {
  app.put('/transacctions', async (req, res, next) => {
    const { to, since, ammount, nameTo, sinceName } = req.body;
    const cookieValues = Object.values(req.cookies);
    console.log(req.body);
    try {
      await axios({
        url: `${process.env.API_URL}/transacctions`,
        method: 'put',
        data: {
          'to': to,
          'since': since,
          'ammount': ammount,
          'nameTo': nameTo,
          'sinceName': sinceName,
        },
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      res.status(201);
    } catch (e) {
      next(e);
      console.log(e);
    }

  });
  app.put('/transacctions/deposit', async (req, res, next) => {
    const { id, ammount } = req.body;
    const cookieValues = Object.values(req.cookies);
    try {
      await axios({
        url: `${process.env.API_URL}/transacctions/deposit`,
        method: 'put',
        data: {
          'ammount': ammount,
          'to': id,
        },
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      res.status(201);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });
};
export default transacctionsRoutes;
