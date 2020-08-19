import { Router } from 'express';
import { middleware as query } from 'querymen';
import { middleware as body } from 'bodymen';
import { create, index, show, update, destroy } from './controller';
import { schema } from './model';
export User, { schema } from './model';

const router = new Router();
const { name, email, picture, role } = schema.tree;

/**
 * @api {post} /users Create user
 * @apiName CreateUser
 * @apiGroup User
 * @apiParam {String} name *User's name .
 * @apiParam {String} email *User's email. This field should be unique.
 * @apiParam {String} picture User's picture.
 * @apiParam {String} role User's role.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.post('/',
  body({ name, email, picture, role }),
  create);

/**
 * @api {get} /users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup User
 * @apiUse listParams
 * @apiParam {String} name User's name filter.
 * @apiParam {Date} startDate User's creation date filter.
 * @apiParam {Date} endDate User's creation date filter.
 * @apiParam {String} email User's email filter.
 * @apiParam {String[]} role User's role filter.
 * @apiParam {Date} endDate User's creation date filter.
 * @apiSuccess {Object[]} users List of users.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query({
    name: {
      type: String,
      paths: ['name'],
      operator: '$eq'
    },
    startDate: {
      type: Date,
      paths: ['createdAt'],
      operator: '$gte'
    },
    endDate: {
      type: Date,
      paths: ['createdAt'],
      operator: '$lte'
    },
    email: {
      type: String,
      paths: ['email'],
      operator: '$eq'
    },
    role: {
      type: [String],
      paths: ['role'],
      operator: '$in'
    }
  }),
  index);

/**
 * @api {get} /users/:id Retrieve user
 * @apiName RetrieveUser
 * @apiGroup User
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.get('/:id',
  show);

/**
 * @api {put} /users/:id Update user
 * @apiName UpdateUser
 * @apiGroup User
 * @apiParam name User's name.
 * @apiParam email User's email.
 * @apiParam picture User's picture.
 * @apiParam role User's role.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 */
router.put('/:id',
  body({ name, email, picture, role }),
  update);

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 User not found.
 */
router.delete('/:id',
  destroy);

export default router;
