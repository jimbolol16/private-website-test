const express = require("express");
const helmet = require("helmet");
// const hostValidation = require("host-validation");
const app = express();
const axios = require("axios");

// Backend services
import { decoratedStoreFormMetadata as storeFormMetadata } from "../server/firestore";
import {
  getAllFaqs,
  getFaqs,
  getReviews,
  getAllItems,
  getPrices,
  getCity,
  getCities,
} from "../server/db";
import isEmpty from "../utils/empty"; // Be careful with this. It is a relative import that could ran into problems once the project is built
import { activePromotions } from "../utils/promotions";

// Constants
const numberOfReviews = 10;
const apiPrefix = process.env.NUXT_API_PREFIX;

// All requests will be json encoded
app.use(express.json());

// keep safe express server against well known vulnerabilities
app.use(helmet());

// Protect this server agains DNS-Rebinding (just like ALLOWED_HOSTS in django)
// app.use(
//   hostValidation({
//     hosts: ["127.0.0.0:3000", "localhost:3000"],
//   })
// );

/**
 * Fetch all FAQs from database.
 */
app.get(`${apiPrefix}faqs`, async (req, res) => {
  try {
    const doc = await getAllFaqs(req.query.site, req.query.lang);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting faqs",
    });
  }
});

/**
 * Fetch subset of FAQs from database to be displayed in the homepage
 */
app.get(`${apiPrefix}home-faqs`, async (req, res) => {
  try {
    const doc = await getFaqs(req.query.site, req.query.lang);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting faq",
    });
  }
});

/**
 * Fetch user reviews from database.
 */
app.get(`${apiPrefix}reviews`, async (req, res) => {
  try {
    const doc = await getReviews(req.query.site, numberOfReviews);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting reviews",
    });
  }
});

/**
 * Fetch calculator items from database.
 */
app.get(`${apiPrefix}items`, async (req, res) => {
  try {
    const doc = await getAllItems(req.query.site);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting items",
    });
  }
});

/**
 * Fetch calculator items from database.
 */
app.get(`${apiPrefix}prices`, async (req, res) => {
  try {
    const doc = await getPrices(req.query.site, req.query.lang);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting prices",
    });
  }
});

/**
 * Fetch calculator items from database.
 */
app.get(`${apiPrefix}cities`, async (req, res) => {
  try {
    const doc = await getCity(
      req.query.city,
      req.query.lang,
      req.query.type,
      req.query.site
    );
    if (isEmpty(doc.city)) {
      return res.sendStatus(404);
    }

    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting footer cities",
    });
  }
});

/**
 * Fetch calculator items from database.
 */
app.get(`${apiPrefix}footer-cities`, async (req, res) => {
  try {
    const doc = await getCities(req.query.site, req.query.lang, req.query.type);
    return res.status(200).send(doc);
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error getting footer cities",
    });
  }
});

/**
 * Handle form submission from incoming leads
 */
app.post(`${apiPrefix}submit`, async (req, res) => {
  // Inject customer ipaddress into body
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  let formData = req.body;
  formData.ipAddress = ipAddress;

  try {
    await storeFormMetadata(formData);
    return res.status(201).send({ message: "success" });
  } catch (error) {
    return res.status(400).json({
      error: "error submitting form",
    });
  }
});

/**
 * Validate promotion
 */
app.post(`${apiPrefix}validate-coupon`, async (req, res) => {
  const activePromotion = activePromotions[req.query.promotion];
  try {
    const response = await activePromotion(req.body);
    return res.status(response.code).send({ message: response.message });
  } catch (error) {
    return res.status(400).json({
      error: error?.message || "error validating coupon",
    });
  }
});

/**
 * Validate email against third-party API service to check the deliverability out
 */
app.get(`${apiPrefix}validate-email`, async (req, res) => {
  try {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    // Set the timeout on this endpoint
    let response = null;
    setTimeout(() => {
      if (response === null) {
        source.cancel();
      }
    }, 2000);

    response = await axios({
      method: "get",
      url: `${process.env.VALIDATION_API_URL}?api_key=${process.env.VALIDATION_API_KEY}&email=${req.query.email}`,
      cancelToken: source.token,
    });

    const isValidEmail = response.data?.deliverability !== "UNDELIVERABLE";
    return res.status(200).json({ res: isValidEmail });
  } catch (error) {
    // On error, we are not interested on block the form submission, so go ahead
    return res.status(200).json({ res: true });
  }
});

/**
 * Global error handler
 */
/*eslint-disable no-unused-vars */
// app.use(function (err, req, res, next) {
//   res.status(400).json({
//     error: err.message,
//   });
// });

export default app;
