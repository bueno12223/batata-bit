import axios from 'axios';

const userRoutes = (app) => {
  app.post('/auth/sign-in', async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await axios({
        url: `${process.env.API_URL}/user/log-in`,
        data: { 'email': email },
        method: 'POST',
        withCredentials: true,
        auth: {
          username: email,
          password,
        },
      });
      res.status(201).header(user.headers).json({ 'user': user.data.user });
    } catch (error) {
      next(error);
      console.log(error);
    }
  });

  app.post('/auth/sign-up', async (req, res, next) => {
    const { email, userId, fullName, password } = req.body;
    try {
      await axios({
        url: `${process.env.API_URL}/user/sing-up`,
        method: 'post',
        data: {
          'email': email,
          'userId': userId,
          'fullName': fullName,
          'password': password,
        },
      });
      res.status(201).json({
        name: req.body.name,
        email: req.body.email,
        id: req.body.id,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  });

  app.put('/auth/config-user', async (req, res, next) => {
    const { userId, fullName, email, password, id } = req.body;
    const cookieValues = Object.values(req.cookies);
    try {
      const response = await axios({
        url: `${process.env.API_URL}/user/${id}`,
        data: { 'userId': userId, 'fullName': fullName, 'email': email, 'password': password },
        method: 'PUT',
        headers: { 'Cookie': `connect.sid=${cookieValues[1]}` },
        withCredentials: true,
      });
      res.status(response.status).json({ 'body': response.body });
    } catch (e) {
      console.log(e);
    }
  });
};
export default userRoutes;
