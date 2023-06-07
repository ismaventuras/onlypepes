module.exports = {
    apps: [{
      name: "onlypepes-telegram-bot",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "production",
      }
    }]
  }