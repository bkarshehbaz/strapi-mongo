module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 8080),
  cron: {
    enabled: false,
  },
  autorstart: false,
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "89fcd7175bff51bf2b949ceef6aef4fb"),
    },
  },
});
// mongodb+srv://bkar:<password>@cluster0.d8sxr.mongodb.net/test
