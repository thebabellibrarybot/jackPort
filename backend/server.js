const express = require('express');
const cors = require('cors')
const { ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');

const mongoose = require('mongoose');
const app = express();
const Port = process.env.PORT || 4000
console.log(Port, 'port')

