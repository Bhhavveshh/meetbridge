# Service setup

## MongoDB

Create your own MongoDB Atlas account and a project named `Resume Projects`. A single free cluster can contain the four project databases. Create a database user and allow your current IP address in Network Access.

Use database `meetbridge` for this project. Set `MONGODB_URI` in `backend/.env` to your connection string, with `/meetbridge` before its query parameters. Percent-encode special characters in database credentials. The `.env.example` file also supports a local MongoDB server.

Only enter credentials in the ignored `.env` file or your hosting provider's secret settings. Do not paste them into README files, screenshots, issues, or commits. No upstream database or external app server is required.

Official guides: [Create a free cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/) and [connect to Atlas](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/).

## Hosting later

The GitHub repository is source hosting; it does not deploy the app or create a database. Hosting will be configured separately using your own accounts. Start with the local setup and resolve the limitations in the README first. Frontend environment changes require a rebuild.
