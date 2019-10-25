'use strict';

/**
 * Todos.js controller
 *
 * @description: A set of functions called "actions" for managing `Todos`.
 */

module.exports = {

  /**
   * Retrieve todos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.todos.search(ctx.query);
    } else {
      return strapi.services.todos.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a todos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.todos.fetch(ctx.params);
  },

  /**
   * Count todos records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.todos.count(ctx.query, populate);
  },

  /**
   * Create a/an todos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.todos.add(ctx.request.body);
  },

  /**
   * Update a/an todos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.todos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an todos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.todos.remove(ctx.params);
  }
};
