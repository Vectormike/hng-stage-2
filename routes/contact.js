const router = require('express').Router();
const sendMail = require('../_helpers/sendMail');

const routes = () => {
  router.route('/').post((req, res) => {
    // console.log(req);
    sendMail(req.body.email, req.body.name, req.body.subject, req.body.message, (err, response) => {
      if (err) return res.render('error', { err });
      //   console.log(response);
      return res.render('success');
    });
  });

  return router;
};

module.exports = routes;
