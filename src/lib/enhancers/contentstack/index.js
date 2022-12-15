import {
  createContentstackEnhancer
} from "@uniformdev/canvas-contentstack";
import {Stack} from "contentstack";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { 
    contentstackApiKey, 
    contentstackEnvironment, 
    contentstackDeliveryToken 
  },
} = getConfig();


const contentstackClient = Stack({ 
  "api_key": contentstackApiKey, 
  "delivery_token": contentstackDeliveryToken, 
  "environment": contentstackEnvironment
});

export const getHowtoArticleSlugs = async function () {
  const query = contentstackClient.ContentType('howto_article').Query();

  return query 
    .includeCount()
    .toJSON()
    .only(['url'])
    .find()
    .then(function success(result) {
        return result[0];
    }, function error(err) {
      return []
    });
}


// create the contentstack enhancer with client
export const contentstackEnhancer = createContentstackEnhancer({ client: contentstackClient });
