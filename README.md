# FE Developer Test

## The story

As a user I would like to view information about a country.

I should be able to select a country from a list and see:

- a graph with the relevant timeseries data
- the country name
- the status
- the highest and lowest values from the timeseries data

## Setup

Install the fake server:

`$ npm install`

To start the fake API:

`$ json-server --watch db.json`


To start the development server:

`$ npm start`

## API

Country list:

`http://localhost:3000/country-list`

Get data for a country:

`http://localhost:3000/country-data/<id>`


