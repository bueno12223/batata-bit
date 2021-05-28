import axios from 'axios';

const goalsRoutes = (app) => {
  app.put('/goal', async (req, res, next) => {
    const { end, title, icon, goal, id } = req.body;
    const cookieValues = Object.values(req.cookies);
    try {
      console.log({ end, title, icon, goal, id });
      const results = await axios({
        url: `${process.env.API_URL}/goal/${id}`,
        data: { 'end': end, 'title': title, 'icon': icon, 'goal': parseFloat(goal) },
        method: 'PUT',
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      res.status(201).json({ 'data': results.body });
    } catch (e) {
      console.log(e);
    }
  });
  // deposit goal
  app.put('/goal/deposit', async (req, res, next) => {
    const { ammount, since, title, icon } = req.body;
    const cookieValues = Object.values(req.cookies);
    try {
      const results = await axios({
        url: `${process.env.API_URL}/goal/deposit`,
        data: { ammount, since, title, icon },
        method: 'PUT',
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      res.status(201).json({ 'data': results.body });
    } catch (e) {
      console.log(e);
    }
  });
};
export default goalsRoutes;
