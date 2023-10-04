const express = require('express')
const router = express.Router();
const { getAllAccounts,
    getSingleAccount,
    transfer,
    createAccount } = require('../Controllers/UserAccount')

router.route('/create').post(createAccount)
router.route('/view').get(getAllAccounts)
router.route('/view:id').get(getSingleAccount)
router.route('/transfer:id').post(transfer)


module.exports = router