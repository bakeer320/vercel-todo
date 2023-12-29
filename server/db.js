const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://bakeer320:sKFGWcwlJvpIafaUNfgUOKflKrbGrcwO@dpg-cm6vebgcmk4c738r2vag-a/todo_mohammad',
  // Other options, if needed
});

module.exports = pool;
