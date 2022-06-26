import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Watch Later Videos are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting videos from user's watchlater playlist.
 * send GET Request at /api/user/watchlater
 * */

export const getWatchLaterVideosHandler = function (schema, request) {
  console.log(" Request JSON " + JSON.stringify(request));
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    return new Response(200, {}, { watchlater: user.watchlater });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles adding videos to user's watchlater playlist.
 * send POST Request at /api/user/watchlater
 * body contains {video}
 * */

export const addItemToWatchLaterVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  console.log(" User " + JSON.stringify(user));
  if (user) {
    console.log("inside if user watch later "+JSON.stringify(request.requestBody));
    const { video } = JSON.parse(request.requestBody);
    console.log("video "+video._id);
    if (user.watchlater.some((item) => item.id === video.id)) {
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your watch later videos"],
        }
      );
    }
    user.watchlater.push(video);
    console.log("user watch later length "+user.watchlater.length+"" +video._id);
    console.log("video pushed to watch later "+JSON.stringify(user.watchlater)+ " length "+user.watchlater.length);
    return new Response(201, {}, { watchlater: user.watchlater });
  }
  return new Response(
    404,
    {},
    {
      errors: ["The email you entered is not Registered. Not Found error"],
    }
  );
};

/**
 * This handler handles removing videos from user's watchlater playlist.
 * send DELETE Request at /api/user/watchlater/:videoId
 * */

export const removeItemFromWatchLaterVideos = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (user) {
    const videoId = request.params.videoId;
    const filteredVideos = user.watchlater.filter(
      (item) => item._id !== videoId
    );
    this.db.users.update({ watchlater: filteredVideos });
    return new Response(200, {}, { watchlater: filteredVideos });
  }
  return new Response(
    404,
    {},
    { errors: ["The user you request does not exist. Not Found error."] }
  );
};
