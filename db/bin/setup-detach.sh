run_query() {
  # shellcheck disable=SC2145
  docker-compose exec -T db bash -c "PGPASSWORD=dev psql -h localhost -d dev -U dev -c '$@'"
}

check_database() {
  run_query "select 1"
}

wait_for_database() {
  local connectionTimeout=3
  local databaseTimeout=60

  echo -e "Waiting for database connection 1s ${connectionTimeout}x"
  # shellcheck disable=SC2091
  until [ $connectionTimeout -eq 0 ]; do
    if  $(nc -z localhost 5432) ; then
      echo -e "Can connect into database"
      break
    fi
    ((connectionTimeout--))
    sleep 1
  done

  if [ $connectionTimeout -eq 0 ]; then
    echo -e "Failed to acquire database connection"
    return 1
  fi

  echo -e "Connection acquired"
  echo -e "Waiting for the database to be ready"
  until check_database > /dev/null 2>&1 || [ $databaseTimeout -eq 0 ]; do
    ((databaseTimeout--))
    sleep 1
  done

  if [ $databaseTimeout -eq 0 ]; then
    echo -e "Failure to wait for the database, it took to long to boot"
    return 1
  fi

  sleep 1

  # Creating test database:
  run_query "drop database if exists _test" > /dev/null 2>&1 || true
  run_query "create database _test" > /dev/null 2>&1

  echo -e "Database ready"
  return 0
}

docker-compose up -d

wait_for_database

echo "Environment is ready"
