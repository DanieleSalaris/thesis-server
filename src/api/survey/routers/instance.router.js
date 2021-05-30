const express = require('express')

const router = express.Router()

// GET /instance/:id/question/
// GET /instance/:id/question/:id
// GET /instance/:id/question/:id/answer
// PUT /instance/:id/question/:id/answer

router.get(
  ':instanceId/question',
  ((req, res) => {

  })
)

router.get(
  ':instanceId/question/:id',
  ((req, res) => {

  })
)

router.get(
  ':instanceId/question/:questionId/answer',
  (((req, res) => {

  }))
)

router.get(
  'instanceId/question/:questionId',
  ((req, res) => {

  })
)

module.exports = router
