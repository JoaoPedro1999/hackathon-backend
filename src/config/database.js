module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: 'postgres',
  password: 'hackathon',
  database: 'excelcior',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
