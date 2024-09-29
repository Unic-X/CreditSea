const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const loanApplications = require('./routes/loanApplicants');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://users:OIDMPzgYCRuExHFb@credit-sea.mlxiv.mongodb.net/?retryWrites=true&w=majority&appName=Credit-Sea";


let db;

async function connectMongoDB() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    db = client.db('loan_applicants');
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

// Routes
app.use('/api', (req, res, next) => {
  req.db = db;
  next();
}, loanApplications);

const PORT = process.env.PORT || 5000;

// Start server after connecting to the database
connectMongoDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await db.client.close();
  console.log('MongoDB connection closed');
  process.exit(0);
});

