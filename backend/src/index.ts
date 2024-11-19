import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import loanApplications from './routes/loanApplicants';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());


let db: Db | undefined;
let client: MongoClient | undefined; // Store client separately

const uri = process.env.MONGO_URI || '';


async function connectMongoDB(): Promise<void> {
  client = new MongoClient(uri, {
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

app.use('/api', (req: Request, res: Response, next: NextFunction) => {
  if (db) {
    req.db = db;
    next();
  } else {
    res.status(503).send('Database not connected');
  }
}, loanApplications);

const PORT: number = parseInt(process.env.PORT || '5000', 10);

// Start server after connecting to the database
connectMongoDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  if (client) {
    await client.close(); // Close client here
    console.log('MongoDB connection closed');
  }
  process.exit(0);
});

declare global {
  namespace Express {
    interface Request {
      db?: Db;
    }
  }
}


