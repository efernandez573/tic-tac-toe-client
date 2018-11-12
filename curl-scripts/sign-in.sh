
#!/bin/bash

curl --include --request POST https://aqueous-atoll-85096.herokuapp.com/sign-in
  --header "Content-Type: application/json"
  --data '{
    "credentials": {
          "email": "'"${EMAIL}"'",
          "password": "'"${PASSWORD}"'"
    }
  }'
