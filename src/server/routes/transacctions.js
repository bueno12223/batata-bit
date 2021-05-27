import axios from 'axios';

const transacctionsRoutes = (app) => {
  app.put('/transacctions/deposit', async (req, res, next) => {
    const { id, ammount } = req.body;
    const cookieValues = Object.values(req.cookies);
    try {
      const result = await axios({
        url: `${process.env.API_URL}/transacctions/deposit`,
        method: 'put',
        data: {
          'ammount': ammount,
          'to': id,
        },
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      console.log(result);
      res.status(200);

    } catch (e) {
      console.log(e);
      next(e);
    }
  });
};
export default transacctionsRoutes;
