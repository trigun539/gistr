const Router = require('express-promise-router')
const { get } = require('axios')
const DB = require('../db')
const Gist = require('../models/Gist')

const router = new Router()

const GISTS_API = 'https://api.github.com/gists'
const USERS_API = 'https://api.github.com/users'

// GET
router.get('/', async (req, res) => {
  try {
    const { data } = await get(GISTS_API)
    res.send(data)
  } catch (e) {
    console.log('error: ', e)
    res.sendStatus(500)
  }
})

// GET gist by username
router.get('/user/:username', async (req, res) => {
  const { username } = req.params

  if (!username) return res.sendStatus(400)

  const { data } = await get(`${USERS_API}/${username}/gists`)

  res.send(data)
})

// GET gist by gitsid
router.get('/:id', async (req, res) => {
  const { id } = req.params

  if (!id) return res.sendStatus(400)

  const { data } = await get(`${GISTS_API}/${id}`)

  res.send(data)
})

module.exports = router
