'use strict';

/**
 * divipola service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::divipola.divipola');
