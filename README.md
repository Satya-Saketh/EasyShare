# EasyShare
EasyShare makes sharing files simple. Upload any file to generate a direct download link that you can share with anyone instantly. Built with a modern React frontend and a robust Node.js backend.
The application is currently designed to operate within a Local Area Network (LAN), meaning both the sender and receiver must be connected to the same Wi-Fi or LAN network for successful file sharing and downloading.

## ⚙️ Installation
1. Clone the Repository
```
git clone https://github.com/Satya-Saketh/EasyShare.git
cd EasyShare
```
2. Navigate to the server directory and install dependencies.

```
cd server
npm install
```
3. Create a .env file in the server directory and add your MongoDB connection string:
```
MONGO_URL=your_mongodb_connection_string
```
4. Start the Server:
```
npm run dev
```
5. Open a new terminal, navigate to the client directory, and install dependencies.

```
cd client
npm install
```
6. Start the Client:
```
npm run dev
```
