// Define your routers
const express = require('express');
const test = require('./test')
const userRoute = require('./userRoutes')
const bookRoute = require('./bookRoutes')
const tradeRoute = require('./tradeRoutes')
const purchaseRoute = require('./purchaseRoutes');
const listingRoute = require('./listingRoutes')


const router = express.Router()

// Define routes for defaultRouter
router.get('/v1', (req, res) => {
  res.send('API v1 is good').status(200);
});

router.use('/test', test)
router.use('/user',userRoute )
router.use('/book',bookRoute)
router.use('/trade',tradeRoute)
router.use('purchase',purchaseRoute)
router.use('/listing', listingRoute)



module.exports = router
