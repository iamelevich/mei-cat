# Final Project

- [Final Project](#final-project)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Run Development Server](#run-development-server)
  - [Build](#build)
  - [Configuration](#configuration)
  - [Docker](#docker)
  - [CI/CD](#cicd)
  - [Repository structure](#repository-structure)

## Requirements

- [Bun](https://bun.sh/)
- Docker (Optional)

## Setup

Install all dependencies.

```bash
bun install
```

## Run Development Server

```bash
bun run dev
```

## Build

```bash
bun run build
```

Result will be in `dist` folder.

## Configuration

You can configure the application by creating a `.env` file in the root directory.

You can use `.env.example` as a template.

| Variable                    | Description                            | Default Value                                          |
| --------------------------- | -------------------------------------- | ------------------------------------------------------ |
| `PORT`                      | The port the server will run on.       | `3000`                                                 |
| `HOSTNAME`                  | The hostname the server will run on.   | `localhost`                                            |
| `DATABASE_URL`              | The URL of the database.               | `postgres://mei-cat:mypassword@localhost:5432/mei-cat` |
| `STORAGE_TYPE`              | The type of storage to use.            | `local`                                                |
| `STORAGE_PATH`              | The path to the storage.               | `./storage`                                            |
| `MEI_FILE_DOWNLOAD_TIMEOUT` | The timeout for downloading MEI files. | `5000`                                                 |

## Docker

You can use Docker to run the application.

Run the docker compose file.

```bash
docker compose -f docker/docker-compose.yml up -d
```

This will start the application and the database.

The application will be available at `http://localhost:3000`.

The database will be available at `localhost:5432`.

## CI/CD

Github Actions used for CI/CD. Check `.github/workflows` for more details.

## Repository structure

```
.
├── client - Frontend application
├── docker - Docker configuration
├── libs - Libraries used in the project
├── server - Backend application
└── tsconfig.json
```