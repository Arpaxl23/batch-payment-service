# Batch Payment Infrastructure Automation Service

This project implements a monthly batch processing system that polls payment events and automatically controls AWS EC2 infrastructure using AWS Lambda.

## Features

- Monthly cron-based batch scheduler
- Payment event processing system
- AWS Lambda integration
- Automatic EC2 start/stop based on payment status
- MongoDB Atlas for event storage
- REST API for payment event creation

## Architecture

Client → Payment API → MongoDB → Batch Service → AWS Lambda → EC2

## Use Case

Simulates subscription-based infrastructure automation where compute resources are enabled only after successful payment.

## Tech Stack

Node.js  
Express  
MongoDB Atlas  
AWS Lambda  
AWS EC2  
node-cron  

## Running locally

Create `.env`:

PORT=5000  
MONGO_URL=your_connection  
LAMBDA_URL=your_lambda_url  

Run:

npm install  
npm run dev