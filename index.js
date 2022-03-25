const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const port = 3000

const liveApiUrl = 'https://farming-pool-indexer.broxus.com/v1'
const testApiUrl = 'https://farming-pool-indexer-test.broxus.com/v1'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //#region Farming pools

  // Get farming pools data.
  app.post('/farming_pools', (req, res) => {

    axios({
        method: 'post',
        url: `${liveApiUrl}/farming_pools`,
        data: {
            aprGe: req.body.aprGe,
            aprLe: req.body.aprLe,
            favoritePoolAddresses: req.body.favoritePoolAddresses,
            isActive: req.body.isActive,
            isAwaitingStart: req.body.isAwaitingStart,
            isLowBalance: req.body.isLowBalance,
            isWithMyFarming: req.body.isWithMyFarming,
            leftAddress: req.body.leftAddress,
            leftCurrency: req.body.leftCurrency,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            rightAddress: req.body.rightAddress,
            rightCurrency: req.body.rightCurrency,
            rootAddresses: req.body.rootAddresses,
            tvlGe: req.body.tvlGe,
            tvlLe: req.body.tvlLe,
            userAddress: req.body.userAddress,
            whiteCurrencyAddresses: req.body.whiteCurrencyAddresses,
            whiteListUri: req.body.whiteListUri
          }
        })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

  // Get farming pool data.
  app.post('/farming_pools/:farming_pool_address', (req, res) => {
    console.log(`Request body data: ${req.params.farming_pool_address}`)

    axios({
        method: 'post',
        url: `${liveApiUrl}/farming_pools/${req.params.farming_pool_address}`,
        data: {
            afterZeroBalance: req.body.afterZeroBalance,
            userAddress: req.body.userAddress
          }
        })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

  //#endregion

  //#region Graphics

  // Get farming pool tvl graphic data.
  app.post('/graphic/tvl', (req, res) => {

    axios({
        method: 'post',
        url: `${liveApiUrl}/graphic/tvl`,
        data: {
            farmingPoolAddress: req.body.farmingPoolAddress,
            from: req.body.from,
            timeframe: req.body.timeframe,
            to: req.body.to
          }
        })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

  // Get farming pool apy graphic data.
  app.post('/graphic/apr', (req, res) => {

    axios({
        method: 'post',
        url: `${liveApiUrl}/graphic/apr`,
        data: {
            farmingPoolAddress: req.body.farmingPoolAddress,
            from: req.body.from,
            timeframe: req.body.timeframe,
            to: req.body.to
          }
        })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

  //#endregion

  //#region Transactions

  // Get transactions data.
  app.post('/transactions', (req, res) => {

    axios({
        method: 'post',
        url: `${liveApiUrl}/transactions`,
        data: {
            eventTypes: req.body.eventTypes,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            poolAddress: req.body.poolAddress,
            rootAddresses: req.body.rootAddresses,
            rootTokenAmountGe: req.body.rootTokenAmountGe,
            rootTokenAmountLe: req.body.rootTokenAmountLe,
            timestampBlockGe: req.body.timestampBlockGe,
            timestampBlockLe: req.body.timestampBlockLe,
            tvGe: req.body.tvGe,
            tvLe: req.body.tvLe,
            userAddress: req.body.userAddress,
            whiteCurrencyAddresses: req.body.whiteCurrencyAddresses,
            whiteListUri: req.body.whiteListUri
          }
        })
    .then(function(response){
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
  })

  //#endregion