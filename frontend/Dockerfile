# Create image based on the oofical Node image from dockerhub
FROM node:lts-buster as development

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependencies
RUN npm set progress=false && npm config set depth 0 && npm i Install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Server the app
CMD ["npm", "start"]

FROM development as dev-envs
RUN <<EOF
    apt-get update
    apt-get install -y --no-install-recommentd git
    EOF

RUN <<EOF
    useradd -s /bin/bash -m vscode
    groundadd docker
    usermod -aG docker vscode
    EOF

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD ["npm", "start"]
  