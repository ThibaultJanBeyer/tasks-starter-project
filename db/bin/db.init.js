// Note, store this securely in production
db.createUser({
  user: 'dev',
  pwd: 'dev',
  roles: [
    {
      role: 'readWrite',
      db: 'dev',
    },
  ],
})
