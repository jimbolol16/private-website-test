import { MongoClient } from "mongodb";
const mongoClient = new MongoClient(process.env.MONGO_DB_URI);

/* CRUD for mongodb entities */
const getAllItems = async function (language) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_ITEMS_COLLECTION
    );

    // Retrieve all faqs
    const cursor = await collection
      .aggregate([
        {
          $addFields: {
            name: `$translations.${language}`,
          },
        },
        {
          $project: {
            translations: 0,
          },
        },
        {
          $group: {
            _id: "$room",
            data: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            data: {
              $map: {
                input: "$data",
                in: {
                  k: "$$this.name",
                  v: "$$this",
                },
              },
            },
          },
        },
        {
          $project: {
            data: {
              $arrayToObject: {
                $map: {
                  input: "$data",
                  in: "$$this",
                },
              },
            },
          },
        },
        {
          $group: {
            _id: null,
            new: {
              $push: {
                k: "$_id",
                v: "$data",
              },
            },
          },
        },
        {
          $replaceRoot: { newRoot: { $arrayToObject: "$new" } },
        },
      ])
      .toArray();

    return cursor ? cursor[0] : {};
  } finally {
    //  await mongoClient.close();
  }
};

const getReviews = async function (site, numberOfDocuments) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_REVIEWS_COLLECTION
    );

    const cursor = await collection
      .aggregate([
        {
          $match: {
            site: site,
          },
        },
        {
          $sample: {
            size: numberOfDocuments,
          },
        },
        {
          $sort: {
            date: -1,
          },
        },
      ])
      .toArray();

    return cursor;
  } finally {
    //  await mongoClient.close();
  }
};

const getFaqs = async function (site, language) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_FAQ_HOME_COLLECTION
    );

    // Retrieve subset of faqs to populate landing page
    const cursor = await collection.find({
      site: site,
      language: language,
    });

    return await cursor.toArray();
  } finally {
    //  await mongoClient.close();
  }
};

const getAllFaqs = async function (site, language) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(process.env.MONGO_DB_FAQ_COLLECTION);

    // Retrieve all faqs
    const cursor = await collection
      .aggregate([
        {
          $match: {
            site: site,
            language: language,
          },
        },
        {
          $group: {
            _id: "$category_id",
            data: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $project: {
            _id: 1,
            data: 1,
            item: {
              $first: "$data",
            },
          },
        },
        {
          $project: {
            _id: 1,
            data: 1,
            category: {
              id: "$item.category_id",
              name: "$item.category",
            },
            categoryName: "$item.category",
          },
        },
        {
          $group: {
            _id: "$category_id",
            data: {
              $push: "$$ROOT",
            },
            categories: {
              $addToSet: "$category",
            },
          },
        },
        {
          $project: {
            categories: 1,
            data: {
              $map: {
                input: "$data",
                in: {
                  _id: "$$this._id",
                  data: "$$this.data",
                  category: "$$REMOVE",
                  categoryName: "$$this.categoryName",
                },
              },
            },
          },
        },
      ])
      .toArray();

    return cursor ? cursor[0] : {};
  } finally {
    //  await mongoClient.close();
  }
};

const getPrices = async function (country, language) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_PRICES_COLLECTION
    );

    const cursor = await collection
      .aggregate([
        {
          $match: {
            language: language,
            country: country,
          },
        },
        {
          $project: {
            country: 0,
            language: 0,
          },
        },
        {
          $sort: {
            ordering_key: 1,
          },
        },
        {
          $group: {
            _id: {
              type: "$type",
              city: "$city.key",
            },
            data: {
              $push: {
                _id: "$$ROOT._id",
                name: "$$ROOT.city.name",
                price: "$$ROOT.price",
                price_promo: "$$ROOT.price_promo_1",
                pickup_promo: "$$ROOT.pickup_promo_1",
                popular: "$$ROOT.popular",
                space: "$$ROOT.space",
                type: "$$ROOT.type",
                features: "$$ROOT.features",
                width: "$$ROOT.width",
                depth: "$$ROOT.depth",
                currency: "$$ROOT.currency",
              },
            },
          },
        },
        {
          $group: {
            _id: "$_id.type",
            data: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $addFields: {
            data: {
              $map: {
                input: "$data",
                in: {
                  k: "$$this._id.city",
                  v: "$$this.data",
                },
              },
            },
          },
        },
        {
          $project: {
            data: {
              $arrayToObject: {
                $map: {
                  input: "$data",
                  in: "$$this",
                },
              },
            },
          },
        },
        {
          $group: {
            _id: "$_id",
            data: {
              $push: {
                k: "$_id",
                v: "$data",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            data: {
              $arrayToObject: {
                $map: {
                  input: "$data",
                  in: "$$this",
                },
              },
            },
          },
        },
        {
          $replaceRoot: { newRoot: "$data" },
        },
        {
          $group: {
            _id: null,
            data: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $project: {
            _id: 0,
            data: {
              $mergeObjects: "$data",
            },
          },
        },
        {
          $replaceRoot: { newRoot: "$data" },
        },
      ])
      .toArray();

    return cursor ? cursor[0] : {};
  } finally {
    //  await mongoClient.close();
  }
};

const getCity = async function (searchKey, language, type, site) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_CITIES_COLLECTION
    );

    const cursor = await collection
      .aggregate([
        {
          $match: {
            language: language,
            site: site,
          },
        },
        {
          $group: {
            _id: "$city",
            data: {
              $push: "$$ROOT",
            },
          },
        },
        {
          $match: {
            "data.search_key": searchKey,
          },
        },
        {
          $project: {
            _id: 1,
            data: {
              $filter: {
                input: "$data",
                as: "item",
                cond: {
                  $and: [{ $eq: ["$$item.type", type] }],
                },
              },
            },
          },
        },
        {
          $unwind: "$data",
        },
        {
          $project: {
            _id: "$data._id",
            site: "$data.site",
            language: "$data.language",
            city: "$data.city",
            ordering_key: "$data.ordering_key",
            search_key: "$data.search_key",
            display_name: "$data.display_name",
            text: {
              $cond: {
                if: {
                  $and: [
                    { $ne: ["$data.text_1", ""] },
                    { $ne: ["$data.text_2", ""] },
                    { $ne: ["$data.text_zones", ""] },
                  ],
                },
                then: "$$REMOVE",
                else: "$data.text",
              },
            },
            meta_title: "$data.meta_title",
            meta_description: "$data.meta_description",
            visits: "$data.visits",
            canonical: "$data.canonical",
            monday_open: "$data.monday_open",
            tuesday_open: "$data.tuesday_open",
            wednesday_open: "$data.wednesday_open",
            thursday_open: "$data.thursday_open",
            friday_open: "$data.friday_open",
            saturday_open: "$data.saturday_open",
            sunday_open: "$data.sunday_open",
            monday_close: "$data.monday_close",
            tuesday_close: "$data.tuesday_close",
            wednesday_close: "$data.wednesday_close",
            thursday_close: "$data.thursday_close",
            friday_close: "$data.friday_close",
            saturday_close: "$data.saturday_close",
            sunday_close: "$data.sunday_close",
            address: "$data.address",
            store_city: "$data.store_city",
            postal_code: "$data.postal_code",
            country: "$data.country",
            phone: "$data.phone",
            seo_text_one: {
              $cond: {
                if: {
                  $eq: ["$data.text_1", ""],
                },
                then: "$$REMOVE",
                else: "$data.text_1",
              },
            },
            seo_text_two: {
              $cond: {
                if: {
                  $eq: ["$data.text_2", ""],
                },
                then: "$$REMOVE",
                else: "$data.text_2",
              },
            },
            seo_text_zones: {
              $cond: {
                if: {
                  $eq: ["$data.text_zones", ""],
                },
                then: "$$REMOVE",
                else: "$data.text_zones",
              },
            },
            email: "$data.email",
          },
        },
        {
          $facet: {
            neighborhoods: [
              {
                $project: {
                  search_key: 1,
                  display_name: 1,
                  _id: 0,
                  visits: 1,
                },
              },
              {
                $match: { search_key: { $ne: searchKey }, visits: { $gt: 0 } },
              },
              { $sort: { search_key: 1 } },
            ],
            data: [
              {
                $match: { search_key: searchKey },
              },
            ],
          },
        },
        {
          $project: {
            neighborhoods: 1,
            city: { $first: "$data" },
          },
        },
      ])
      .toArray();

    return cursor ? cursor[0] : {};
  } finally {
    //  await mongoClient.close();
  }
};

const getCities = async function (site, language, type) {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_CITIES_COLLECTION
    );

    const cursor = await collection
      .aggregate([
        {
          $match: {
            site: site,
            language: language,
            type: type,
          },
        },
        { $sort: { ordering_key: 1 } },
        {
          $group: {
            _id: null,
            cities: {
              $push: {
                $cond: {
                  if: { $eq: ["$city", "$search_key"] },
                  then: { name: "$display_name", key: "$search_key" },
                  else: "$$REMOVE",
                },
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();

    return cursor ? cursor[0] : {};
  } finally {
    //  await mongoClient.close();
  }
};

const getCitiesForSitemap = async function () {
  try {
    const database = mongoClient.db(process.env.MONGO_DB_NAME);
    const collection = database.collection(
      process.env.MONGO_DB_CITIES_COLLECTION
    );

    const cursor = await collection
      .aggregate([
        // {
        //   $match: {
        //     site: site,
        //   },
        // },
        {
          $project: {
            search_key: 1,
            site: 1,
            language: 1,
          },
        },
        {
          $group: {
            _id: "$search_key",
            routes: {
              $addToSet: {
                key: "$search_key",
                site: "$site",
                lang: "$language",
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();

    return cursor;
  } finally {
    //  await mongoClient.close();
  }
};

export {
  getAllFaqs,
  getFaqs,
  getReviews,
  getAllItems,
  getPrices,
  getCity,
  getCities,
  getCitiesForSitemap,
};
