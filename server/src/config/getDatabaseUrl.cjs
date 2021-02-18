const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/Scend-It-2.0_development",
      test: "postgres://postgres:postgres@localhost:5432/Scend-It-2.0_test",
      e2e: "postgres://postgres:postgres@localhost:5432/Scend-It-2.0_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
