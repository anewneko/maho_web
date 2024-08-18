# 使用官方 Node.js 镜像作为基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 构建 Nuxt.js 应用程序
RUN npm run build

# 暴露应用程序运行的端口（假设应用程序运行在3000端口和3333端口）
EXPOSE 3000
EXPOSE 3333

# 启动 Nuxt.js 应用程序
CMD ["npm", "start"]